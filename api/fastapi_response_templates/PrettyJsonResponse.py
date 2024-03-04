from typing import Any
from fastapi.responses import JSONResponse
import orjson

class ORJSONPrettyResponse(JSONResponse):
    def render(self, content: Any) -> bytes:
        return orjson.dumps(
            content,
            option=orjson.OPT_NON_STR_KEYS
            | orjson.OPT_SERIALIZE_NUMPY 
            | orjson.OPT_INDENT_2,
        )