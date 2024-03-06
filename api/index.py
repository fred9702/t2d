import json
import os
import openai
import pandas as pd
from fastapi.responses import HTMLResponse
from fastapi.templating import Jinja2Templates
from fastapi import FastAPI, Request, File, UploadFile, Form
from langchain_openai import ChatOpenAI
from langchain.prompts import PromptTemplate
from langchain_core.output_parsers import JsonOutputParser
from langchain_core.runnables import RunnablePassthrough
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv, find_dotenv
from api.fastapi_response_templates.PrettyJsonResponse import ORJSONPrettyResponse
from api.dlai import review_template_2
from api.ReviewTemplates import ReviewTemplate
from langchain.globals import set_verbose
import csv
import codecs

set_verbose(True)

import logging

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# API
app = FastAPI(docs_url="/api/docs", openapi_url="/api/openapi.json")
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

templates = Jinja2Templates(directory="templates")

# LangChain
load_dotenv() # read local .env file
openai.api_key = os.environ['OPENAI_APIKEY']
print(os.environ['OPENAI_APIKEY'])



LLM_MODEL = 'gpt-3.5-turbo'
TEMP=0.0

@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.get("/api/healthchecker")
def healthchecker():
    return {"status": "up"}
    
@app.post("/api/uploader/csv", response_class=ORJSONPrettyResponse)
async def upload_csv_file(platform: str = Form(...), file: UploadFile = File(...)):
    # Read CSV file with Pandas
    csv_content = file.file
    data = csv.DictReader(codecs.iterdecode(csv_content, 'utf-8'))
    data_dict = [row for row in data]
    file.file.close()

    print(data_dict)
    inputs = []
    # Extract relevant keys from dict
    if platform.lower() == "shopify":
      inputs = [dict["body"] for dict in data_dict]

    # 2. Initialise Model
    model = ChatOpenAI(temperature=TEMP, model=LLM_MODEL)
    
    # 3. Initialise Output Parser, then Prompt
    json_parser = JsonOutputParser(pydantic_object=ReviewTemplate)
    
    prompt = PromptTemplate(
        template=review_template_2,
        input_variables=["text"],
        partial_variables={"format_instructions": json_parser.get_format_instructions()}
    )

    # 4. Initialise chain
    chain = {"text": RunnablePassthrough()} | prompt | model | json_parser

    # 5. Invoke chain
    response = chain.batch(inputs)
    

    print(f"RESPONSE: {response}")
    # Join items in list for a csv row
    return response
 

@app.post("/api/uploader/json", response_class=ORJSONPrettyResponse)
async def create_upload_file(file: UploadFile = File(...)):
    # 1. Convert JSON to Python Dict
    contents = await file.read()
    data = json.loads(contents)
    await file.close()
    customer_review = data["review"]
    
    # 2. Initialise Model
    model = ChatOpenAI(temperature=TEMP, model=LLM_MODEL)
    
    # 3. Initialise Output Parser, then Prompt
    json_parser = JsonOutputParser(pydantic_object=ReviewTemplate)

    prompt = PromptTemplate(
       template=review_template_2,
       input_variables=["text"],
       partial_variables={"format_instructions": json_parser.get_format_instructions()}
    )
    
    # 4. Build Chain
    chain = prompt | model | json_parser

    # 4. Invoke Chain
    response = chain.invoke({"text": customer_review})

    return response