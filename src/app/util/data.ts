// クライアントでのデータ取得処理

function getHeaders() {
  const OPENAI_API_KEY = process.env.NEXT_PUBLIC_OPENAI_API_KEY;
  const headers = new Headers();
  headers.append("Content-Type", "application/json");
  headers.append("Authorization", `Bearer ${OPENAI_API_KEY}`);
  return headers;
}

const openai_chat_endpoint = "https://api.openai.com/v1/chat/completions";

export async function extractValue(exps: string) {
  const systemMessage =
    "これから、あなたにはある就活生の経験がコンマ区切りで与えられます。それらの経験から、フォーマットにしたがってその就活生が一般的にどのようなことに価値を感じているか列挙してください。例えば、ボランティア活動から、その人が人助けと考えられます。";
  const headers = getHeaders();
  const body = JSON.stringify({
    temperature: 0.8,
    model: "gpt-4o-mini",
    messages: [
      {
        role: "system",
        content: systemMessage,
      },
      {
        role: "user",
        content: exps,
      },
    ],
    response_format: {
      type: "json_schema",
      json_schema: {
        name: "value_extraction",
        schema: {
          type: "object",
          properties: {
            values: {
              type: "array",
              items: {
                type: "string",
              },
            },
          },
        },
      },
    },
  });
  const requestOptions = {
    method: "POST",
    headers: headers,
    body: body,
  };
  const response = await fetch(openai_chat_endpoint, requestOptions);
  const data = await response.json();
  const values = JSON.parse(data.choices[0].message.content).values as string[];
  return values;
}

export async function sendValue(valuesLine: string) {
  const systemMessage =
    "これから、あなたにはある就活生が持つ価値がコンマ区切りで与えられます。価値のそれぞれを企業選びの軸へと変換し、フォーマットにしたがって返してください。企業選びの軸は、就活生が求める会社の特性のことです。例えば、ある就活生がチームワークに価値を置いている場合、その人の企業選びの軸はチームワークで仕事をする文化がある、になるでしょう。なお回答は最大で3つまでとします。";
  const headers = getHeaders();
  const body = JSON.stringify({
    temperature: 0.8,
    model: "gpt-4o-mini",
    messages: [
      {
        role: "system",
        content: systemMessage,
      },
      {
        role: "user",
        content: valuesLine,
      },
    ],
    response_format: {
      type: "json_schema",
      json_schema: {
        name: "value_conversion",
        schema: {
          type: "object",
          properties: {
            criteria: {
              type: "array",
              items: {
                type: "string",
              },
            },
          },
        },
      },
    },
  });
  const requestOptions = {
    method: "POST",
    headers: headers,
    body: body,
  };
  const response = await fetch(openai_chat_endpoint, requestOptions);
  const data = await response.json();
  const criteria = JSON.parse(data.choices[0].message.content)
    .criteria as string[];
  return criteria;
}
