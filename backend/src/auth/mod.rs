use neon::prelude::*;

pub fn auth_mojang(mut cx: FunctionContext) -> JsResult<JsString> {
  let username = cx.argument::<JsString>(0).unwrap().value(&mut cx);
  let password = cx.argument::<JsString>(1).unwrap().value(&mut cx);
  let client = reqwest::blocking::Client::new();
  let url = "https://authserver.mojang.com/authenticate";
  let body = format!(
    r#"
  {{
      "agent": {{
      "name": "Minecraft",
      "version": 1
    }},
    "username": {},
    "password": {},
    "clientToken": {},
    "requestUser": true
  }}"#,
    username.as_str(),
    password.as_str(),
    env!("CARGO_PKG_NAME")
  )
  .to_string();
  let response = client.post(url).body(body).send().unwrap().text().unwrap();
  return Ok(cx.string(format!("{:?}", response)));
}

pub fn invalidate(mut cx: FunctionContext) -> JsResult<JsString> {
  let accessToken = cx.argument::<JsString>(0).unwrap().value(&mut cx);
  let clientToken = env!("CARGO_PKG_NAME");
  let url = "https://authserver.mojang.com/invalidate";
  let body = format!(
    r#"
  {{
  "accessToken": {},
  "clientToken": {}
  }}"#,
    accessToken, clientToken
  );
  let client = reqwest::blocking::Client::new();
  let response = client.post(url).body(body).send().unwrap().text().unwrap();
  return Ok(cx.string(response));
}
