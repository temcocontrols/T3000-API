#include <napi.h>
#include <string>
#include "T3000Interpretor/dllmain.h"

/* Napi::String greetHello(const Napi::CallbackInfo &info)
{
    Napi::Env env = info.Env();

    std::string user = (std::string)info[0].ToString();
    std::string result = helloUser(user);

    return Napi::String::New(env, result);
}

// callback eethod when module is registered with Hode.js
Napi::Object Init(Napi::Env env, Napi::Object exports)
{

    exports.Set(
        Napi::String::New(env, "greetHello"),
        Napi::Function::New(env, greetHello));
    return exports;
}

NODE_API_MODULE(greet, Init) */

Napi::Object encode_program(const Napi::CallbackInfo &info)
{
    Napi::Env env = info.Env();

    std::string code = info[0].ToString();
    encode_str * result = Encode_function((char*)code.c_str());

    Napi::Object res = Napi::Object::New(env);
    res.Set("errorcode", result->errorcode);
    res.Set("encode_array", result->encode_array);
    res.Set("encode_message", result->encode_message);

    return res;
}

// callback eethod when module is registered with Hode.js
Napi::Object Init(Napi::Env env, Napi::Object exports)
{

    exports.Set(
        Napi::String::New(env, "encode_program"),
        Napi::Function::New(env, encode_program));
    return exports;
}

NODE_API_MODULE(encode_program, Init)