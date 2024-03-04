from langchain_core.output_parsers import JsonOutputParser
from langchain_core.pydantic_v1 import BaseModel, Field

class ReviewTemplate(BaseModel):
    gift: bool = Field(description="Was the item purchased as a gift for someone else? Answer True if yes, False if not or unknown.")
    delivery_days: str = Field(description="How many days did it take for the product to arrive? If this information is not found, output -1.")
    price_value: str = Field(description="Extract any sentences about the value or price, and output them as a comma separated Python list.")
    