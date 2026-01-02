use serde::{Deserialize, Serialize};

/// Single value or closed range representation.
///
/// - [v]           : single value
/// - [start, end]  : closed range (semantic constraint: start <= end)
///
/// NOTE:
/// The constraint `start <= end` is defined by specification
/// and must be validated at the application level.
#[derive(Debug, Clone, PartialEq, Eq, Serialize, Deserialize)]
#[serde(untagged)]
pub enum Dimension {
    Single([i64; 1]),
    Range([i64; 2]),
}

/// Reference pair into `fields`.
///
/// [field_index, data_index]
#[derive(Debug, Clone, PartialEq, Eq, Serialize, Deserialize)]
pub struct FieldRefPair(pub usize, pub usize);

/// Dimension definition.
///
/// Omitting a dimension means "all values" for that dimension.
#[derive(Debug, Clone, PartialEq, Serialize, Deserialize)]
pub struct Dims {
    /// Altitude index (vertical direction)
    #[serde(skip_serializing_if = "Option::is_none")]
    pub f: Option<Dimension>,

    /// Longitude index (east-west direction)
    #[serde(skip_serializing_if = "Option::is_none")]
    pub x: Option<Dimension>,

    /// Latitude index (north-south direction)
    #[serde(skip_serializing_if = "Option::is_none")]
    pub y: Option<Dimension>,

    /// Time index
    #[serde(skip_serializing_if = "Option::is_none")]
    pub t: Option<Dimension>,

    /// References to fields/data
    pub ref_: Vec<FieldRefPair>,
}

/// ID group definition.
#[derive(Debug, Clone, PartialEq, Serialize, Deserialize)]
pub struct IdGroup {
    /// Zoom level
    pub z: u32,

    /// Time interval (seconds)
    pub i: u64,

    /// Dimension definitions
    pub dims: Vec<Dims>,
}

/// Field definition.
///
/// All elements in `data` must be of the same type.
/// This constraint is semantic and not enforced at the type level.
#[derive(Debug, Clone, PartialEq, Serialize, Deserialize)]
pub struct Field {
    /// Field name
    pub name: String,

    /// Data values
    pub data: Vec<serde_json::Value>,
}

/// Meta information.
#[derive(Debug, Clone, PartialEq, Serialize, Deserialize)]
pub struct Meta {
    /// Format version
    pub version: String,

    /// Dataset description
    #[serde(skip_serializing_if = "Option::is_none")]
    pub description: Option<String>,

    /// Whether spatial / spatio-temporal ranges are unique
    pub unique: bool,
}

/// Root object of spatial-id-json.
#[derive(Debug, Clone, PartialEq, Serialize, Deserialize)]
pub struct SpatialIdJson {
    pub meta: Meta,
    pub fields: Vec<Field>,
    pub ids: Vec<IdGroup>,
}
