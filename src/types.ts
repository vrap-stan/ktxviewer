export interface KTXFileInfo {
  file: File;
  id: string; // For unique key in lists
}

export interface TextureDisplayInfo {
  width: number;
  height: number;
  format: string;
}

export interface TextureDisplayInfo {
  width: number;
  height: number;
  format: string;
  // Optional: If you want to show original dimensions from KTX header
  // originalWidth?: number;
  // originalHeight?: number;
}

/**
 * Represents the header information typically found in a KTX file.
 * Fields are based on KTX v1 and KTX v2 specifications.
 * Some fields might be optional depending on the KTX version and content.
 */
export interface KTXHeader {
  // Common KTX v1 fields (may also be relevant for KTX v2 if not using vkFormat)
  glType?: number;                // e.g., GL_UNSIGNED_BYTE
  glTypeSize?: number;            // Size of glType in bytes (e.g., 1 for GL_UNSIGNED_BYTE)
  glFormat?: number;              // e.g., GL_RGB, GL_RGBA
  glInternalFormat?: number;      // e.g., GL_RGB8, GL_COMPRESSED_RGB_S3TC_DXT1_EXT
  glBaseInternalFormat?: number;  // e.g., GL_RGB, GL_RGBA

  // Core dimensions
  pixelWidth: number;             // Width of the base mipmap level
  pixelHeight: number;            // Height of the base mipmap level
  pixelDepth: number;             // Depth of the base mipmap level (for 3D textures)

  numberOfArrayElements: number;  // For array textures (0 if not an array texture)
  numberOfFaces: number;          // For cubemaps (6) or cubemap arrays. (1 for non-cubemaps)
  numberOfMipmapLevels: number;   // Number of mipmap levels in the file

  bytesOfKeyValueData: number;    // Size of the key/value data block

  // KTX v2 specific fields (some may overlap or replace KTX v1 fields)
  vkFormat?: number;              // Vulkan VkFormat enum value
  typeSize?: number;              // Size in bytes of the element data type (matches KTX2 spec `typeSize`)
  supercompressionScheme?: number;// e.g., KTX_SUPERCOMPRESSION_BASIS, KTX_SUPERCOMPRESSION_ZSTD

  // Other potential fields from ktx-parse (you might need to inspect the library's output)
  isCompressed?: boolean;
  isCubemap?: boolean;
  isArray?: boolean;
  isVolume?: boolean;
}

/**
 * Represents the parsed KTX file data, including the header,
 * key-value metadata, and mipmap level data.
 */
export interface KTXData extends KTXHeader {
  /**
   * Key-value metadata. Keys are strings, values can be strings or Uint8Arrays
   * depending on how ktx-parse handles them.
   * Example: { "KTXorientation": "rd", "CustomKey": Uint8Array[...] }
   */
  keyValueObjects?: { [key: string]: string | Uint8Array };

  /**
   * An array of mipmap levels. Each object contains the image data
   * for that level and its dimensions.
   */
  mipmaps: Array<{
    data: Uint8Array; // Raw pixel or compressed data for this mipmap level
    width: number;    // Width of this mipmap level
    height: number;   // Height of this mipmap level
    level?: number;   // Optional: mipmap level index
  }>;

  // Potentially other fields depending on the ktx-parse library's implementation.
  // For example, it might directly put some flags here.
}

// Example of how parseKtxFile from 'ktx-parse' might be typed:
// declare module 'ktx-parse' {
//   export function read(data: Uint8Array): KTXData;
// }
// You might have this in a separate .d.ts file or directly use it if
// ktx-parse provides its own types (which it might not, or they might be basic).