use neon::prelude::*;

pub fn mojang_account_status(mut cx: FunctionContext) -> JsResult<JsBoolean> {
    let response = reqwest::blocking::Client::new()
        .get("https://account.mojang.com")
        .send()
        .unwrap();
    if response.status().is_success() {
        return Ok(cx.boolean(true));
    }
    Ok(cx.boolean(false))
}
