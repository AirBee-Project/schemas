/**
 * spatial-id-json Type Definitions
 * Compatible with JSON Schema Draft 2020-12
 */

/**
 * Single value or closed range representation.
 *
 * - [v]           : single value
 * - [start, end]  : closed range (semantic constraint: start <= end)
 *
 * NOTE:
 * The constraint `start <= end` is enforced by specification,
 * not by the type system.
 */
export type RangeOrSingle = [number] | [number, number];

/**
 * Reference pair to fields array.
 *
 * [fieldIndex, dataIndex]
 */
export type FieldRefPair = [number, number];

/**
 * Dimension definition object.
 *
 * Omitting a dimension means "all values" for that dimension.
 */
export interface Dims {
  /**
   * Altitude index (vertical direction)
   */
  f?: RangeOrSingle;

  /**
   * Longitude index (east-west direction)
   */
  x?: RangeOrSingle;

  /**
   * Latitude index (north-south direction)
   */
  y?: RangeOrSingle;

  /**
   * Time index
   */
  t?: RangeOrSingle;

  /**
   * References to fields/data
   */
  ref: FieldRefPair[];
}

/**
 * ID group definition.
 */
export interface IdGroup {
  /**
   * Zoom level
   */
  z: number;

  /**
   * Time interval (seconds)
   */
  i: number;

  /**
   * Dimension definitions
   */
  dims: Dims[];
}

/**
 * Field definition.
 *
 * The type of `data` elements must be uniform within each field,
 * but is intentionally left generic.
 */
export interface Field<T = unknown> {
  /**
   * Field name
   */
  name: string;

  /**
   * Data values
   */
  data: T[];
}

/**
 * Meta information.
 */
export interface Meta {
  /**
   * Format version
   */
  version: string;

  /**
   * Dataset description
   */
  description?: string;

  /**
   * Whether spatial / spatio-temporal ranges are unique within the dataset
   */
  unique: boolean;
}

/**
 * Root object of spatial-id-json.
 */
export interface SpatioTemporalIdJson {
  meta: Meta;
  fields: Field[];
  ids: IdGroup[];
}
