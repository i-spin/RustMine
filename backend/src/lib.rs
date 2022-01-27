mod status_check;

use crate::status_check::*;
use neon::prelude::*;

#[neon::main]
fn main(mut cx: ModuleContext) -> NeonResult<()> {
    cx.export_function("mojangAccountStatus", mojang_auth_status)?;
    cx.export_function("mojangSessionStatus", mojang_session_status)?;
    cx.export_function("mojangTextureStatus", mojang_texture_status)?;
    Ok(())
}
