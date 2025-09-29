package com.lunapos.plugin.lunalite_sdk

import android.content.Context
import android.util.Log
import fi.iki.elonen.NanoHTTPD
import java.io.InputStream

class LocalWebServer(private val context: Context, port: Int = 8080) : NanoHTTPD(port) {

    companion object {
        const val TAG = "LocalWebServer"
    }

    override fun serve(session: IHTTPSession?): Response? {
        val uri = session?.uri ?: "/"
        val filePath = when (uri) {
            "/", "" -> "lunasdk/index.html"
            else -> "lunasdk${uri}"
        }

        return try {
            val input: InputStream = context.assets.open(filePath.removePrefix("/"))
            newChunkedResponse(Response.Status.OK, getMimeType(filePath), input)
        } catch (e: Exception) {
            Log.e(TAG, "serve: on ERROR", e)
            newFixedLengthResponse(Response.Status.OK, "text/plain", "File not found: $uri")
        }
    }

    private fun getMimeType(path: String): String = when {
        path.endsWith(".html") -> "text/html"
        path.endsWith(".js") -> "application/javascript"
        path.endsWith(".css") -> "text/css"
        path.endsWith(".json") -> "application/json"
        path.endsWith(".wasm") -> "application/wasm"
        path.endsWith(".ico") -> "image/x-icon"
        path.endsWith(".png") -> "image/png"
        path.endsWith(".jpg") || path.endsWith(".jpeg") -> "image/jpeg"
        else -> "text/plain"
    }
}