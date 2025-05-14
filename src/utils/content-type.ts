//Lista com Opções de Content Types

export enum ContentType {
    // Conteúdo comum em APIs
    JSON = "application/json",
    TEXT = "text/plain",
    HTML = "text/html",
    XML = "application/xml",
    FORM_URLENCODED = "application/x-www-form-urlencoded",
    FORM_DATA = "multipart/form-data",

    // Arquivos
    OCTET_STREAM = "application/octet-stream", // binário genérico
    PDF = "application/pdf",
    ZIP = "application/zip",
    CSV = "text/csv",

    // Imagens
    JPEG = "image/jpeg",
    PNG = "image/png",
    GIF = "image/gif",
    WEBP = "image/webp",
    SVG = "image/svg+xml",

    // Áudio/Vídeo
    MPEG = "audio/mpeg",
    MP4 = "video/mp4",
    OGG_AUDIO = "audio/ogg",
    OGG_VIDEO = "video/ogg",
    WEBM_AUDIO = "audio/webm",
    WEBM_VIDEO = "video/webm"
}
