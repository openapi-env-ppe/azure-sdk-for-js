/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */


import * as msRest from "@azure/ms-rest-js";

/**
 * This shows the components of the color in rgba format
 */
export interface DrawingAttributesPatternColor {
  /**
   * The red component of the color
   */
  r?: number;
  /**
   * The green component of the color
   */
  g?: number;
  /**
   * The blue component of the color
   */
  b?: number;
  /**
   * The alpha component of the color
   */
  a?: number;
}

/**
 * The properties to use when rendering ink
 */
export interface DrawingAttributesPattern {
  /**
   * The width of the stylus used to draw the stroke
   */
  width?: number;
  /**
   * This shows the components of the color in rgba format
   */
  color?: DrawingAttributesPatternColor;
  /**
   * The height of the stylus used to draw the stroke
   */
  height?: number;
  /**
   * This indicates whether Bezier smoothing is used to render the stroke
   */
  fitToCurve?: boolean;
  /**
   * Possible values include: 'noOperation', 'copyPen', 'maskPen'
   */
  rasterOp?: RasterOp;
  /**
   * This indicates whether the thickness of a rendered Stroke changes according the amount of
   * pressure applied.
   */
  ignorePressure?: boolean;
  /**
   * This specifies the tip to be used to draw a stroke. Possible values include: 'ellipse',
   * 'rectangle'
   */
  tip?: Tip;
}

/**
 * This holds all the properties of one point
 */
export interface PointDetailsPattern {
  /**
   * This represents the x coordinate of the point
   */
  x: number;
  /**
   * This represents the y coordinate of the point
   */
  y: number;
}

/**
 * An interface representing AlternatePatternItem.
 */
export interface AlternatePatternItem {
  /**
   * Possible values include: 'inkDrawing', 'inkBullet', 'inkWord', 'unknown'
   */
  category: Leaf;
  /**
   * Array of point objects that represent points that are relevant to the type of recognition
   * unit. For example, for leaf node of inkDrawing category that represents a triangle, points
   * would include the x,y coordinates of the vertices of the recognized triangle. The points
   * represent the coordinates of points used to create the perfectly drawn shape that is closest
   * to the original input. They may not exactly match.
   */
  points?: PointDetailsPattern[];
  /**
   * The angular orientation of an object relative to the horizontal axis
   */
  rotationAngle?: number;
  /**
   * A number between 0 and 1 which indicates the confidence level in the result
   */
  confidence?: number;
  /**
   * The recognized string from an inkWord or the name of a recognized shape in an inkDrawing
   * object
   */
  recognizedString: string;
}

/**
 * A container for the attributes of a value contained in the ink point object.
 */
export interface InkPointValueAttribute {
  /**
   * The name of the point attribute.
   */
  name?: string;
  /**
   * The minimum value for the attribute
   */
  logicalMinimum?: number;
  /**
   * The maximum value for the attribute
   */
  logicalMaximum?: number;
}

/**
 * An object containing the properties of an point in the path of an ink stroke. The main
 * properties are the x and y values. Other include tip pressure, x tilt etc. For the coordinate
 * values, it is recommended to have a precision of 8 digits after the decimal to obtain most
 * accurate recognition results. The origin (0,0) of the canvas is assumed to be at the top left
 * corner of the canvas
 */
export interface InkPoint {
  /**
   * The x coordinate of the pen location on the writing surface.
   */
  x: number;
  /**
   * The y coordinate of the pen location on the writing surface.
   */
  y: number;
  /**
   * The z coordinate of the pen location on the writing space. This may not be used for
   * recognition.
   */
  z?: number;
  /**
   * The force exerted against the tablet surface by the transducer, typically a stylus. This may
   * not be used for recognition.
   */
  tipPressure?: number;
  /**
   * The force exerted directly by the user on a transducer sensor, such as a pressure-sensitive
   * button on the barrel of a stylus. This may not be used for recognition.
   */
  barrelPressure?: number;
  /**
   * The time relative to the absolute time the transducer last became active. This may not be used
   * for recognition.
   */
  timestamp?: number;
  /**
   * The plane angle between the Y-Z plane and the plane containing the transducer axis and the Y
   * axis. This may not be used for recognition.
   */
  xTilt?: number;
  /**
   * The angle between the X-Z and transducer-X planes. A positive Y Tilt is toward the user. This
   * may not be used for recognition.
   */
  yTilt?: number;
  /**
   * The width of the tip of the writing instrument. This is used by touch screen devices to report
   * the width of the finger contact on the writing surface. This may not be used for recognition.
   */
  width?: number;
  /**
   * The height of the tip of the writing instrument. This is used by touch screen devices to
   * report the height of the finger contact on the writing surface. This may not be used for
   * recognition.
   */
  height?: number;
  /**
   * A switch located on the tip of a stylus indicating contact of the stylus with a surface. This
   * may not be used for recognition.
   */
  tipSwitch?: boolean;
  /**
   * A value that indicates that the currently sensed position originates from the end of a stylus
   * opposite the tip switch. This may not be used for recognition.
   */
  inverted?: boolean;
  /**
   * A non-tip button located on the barrel of a stylus. Its function is typically mapped to a
   * system secondary button. This may not be used for recognition.
   */
  barrelSwitch?: boolean;
  /**
   * The control is used for erasing objects. It is typically located opposite the writing end of a
   * stylus. This may not be used for recognition.
   */
  eraser?: boolean;
  /**
   * A secondary switch used in conjunction with the tip switch to indicate pressure above a
   * certain threshold applied with the stylus. This may not be used for recognition.
   */
  secondaryTip?: boolean;
}

/**
 * The bounding rectangle of the recognition unit represented by the coordinates of the top left
 * corner (topX,topY) along with width and height of the rectangle. Note that this rectangle is not
 * rotated. So for  rotated objects such as slanted handwriting, it will cover the entire object.
 * The unit will be matched to the one specified in the original request (mm by default.)
 */
export interface RecognitionUnitItemBoundingRectangle {
  /**
   * This is the top left x coordinate
   */
  topX?: number;
  /**
   * This is the top left y coordinate
   */
  topY?: number;
  /**
   * This is width of the bounding rectangle
   */
  width?: number;
  /**
   * The is the height of the bounding rectangle
   */
  height?: number;
}

/**
 * This identifies the recognized entity
 */
export interface RecognitionUnitItem {
  /**
   * The identifier of the recognition unit. This id is used to indicate parent/child relationship
   * between different recognition units.
   */
  id: number;
  /**
   * Possible values include: 'root', 'writingRegion', 'paragraph', 'line', 'inkBullet',
   * 'inkDrawing', 'inkWord', 'unknown'
   */
  category: Category;
  alternates?: AlternatePatternItem[];
  /**
   * The coordinates (x,y) of the center of the recognition unit.
   */
  center?: PointDetailsPattern;
  /**
   * Array of point objects that represent points that are relevant to the type of recognition
   * unit. For example, for a leaf node of inkDrawing category that represents a triangle, points
   * would include the x, y coordinates of the vertices of the recognized triangle. The points
   * represent the coordinates used to create the perfectly drawn shape that is closest to the
   * original input. They may not exactly match.
   */
  points?: PointDetailsPattern[];
  /**
   * An array of integers representing the identifier of each child of the current recognition
   * unit.
   */
  childIds?: number[];
  /**
   * Possible values include: 'container', 'leaf'
   */
  classProperty: ClassProperty;
  /**
   * The id of the parent node in the tree structure of the recognition results. parent = 0
   * indicates that there is no dedicated parent node for this unit.
   */
  parentId: number;
  /**
   * The bounding rectangle of the recognition unit represented by the coordinates of the top left
   * corner (topX,topY) along with width and height of the rectangle. Note that this rectangle is
   * not rotated. So for  rotated objects such as slanted handwriting, it will cover the entire
   * object. The unit will be matched to the one specified in the original request (mm by default.)
   */
  boundingRectangle?: RecognitionUnitItemBoundingRectangle;
  /**
   * This is the rotated bounding rectangle that covers the entire recognized object along the
   * angle of rotation of the object. Note that this is NOT the same as rotating the
   * boundingRectangle by the rotation angle.
   */
  rotatedBoundingRectangle?: PointDetailsPattern[];
  /**
   * This is an array of integers representing the list of stroke Identifiers from the input
   * request body that belong to this recognition unit.
   */
  strokeIds: number[];
  /**
   * The string contains the text that was recognized. It can be an empty string if the recognizer
   * cannot determine the text.
   */
  recognizedText?: string;
  /**
   * A number between 0 and 1 which indicates the confidence level in the result.
   */
  confidence?: number;
  /**
   * This is the angle at which the unit is rotated in degrees with respect to the positive X axis.
   */
  rotationAngle?: number;
  /**
   * Possible values include: 'drawing', 'square', 'rectangle', 'circle', 'ellipse', 'triangle',
   * 'isoscelesTriangle', 'equilateralTriangle', 'rightTriangle', 'quadrilateral', 'diamond',
   * 'trapezoid', 'parallelogram', 'pentagon', 'hexagon', 'blockArrow', 'heart', 'starSimple',
   * 'starCrossed', 'cloud', 'line', 'curve', 'polyLine'
   */
  recognizedObject?: Shape;
}

/**
 * An interface representing Stroke.
 */
export interface Stroke {
  /**
   * This is treated as a unique identifier for each stroke within a request. If the id is repeated
   * within the same request, the service will return an error.
   */
  id: number;
  /**
   * The IETF BCP 47 language code (for ex. en-US, en-GB, hi-IN etc.) of the expected language for
   * the handwritten content in this stroke. The response will include results from this language.
   */
  language?: string;
  points: InkPoint[];
  drawingAttributes?: DrawingAttributesPattern;
  /**
   * This is an optional property which influences the decision about what the stroke kind is
   * between inkWriting and inkDrawing. This property should be set ONLY if the type of user
   * content is known ahead of time. Not setting this value implies the kind is not known ahead of
   * time. Kind represents the type of content the stroke is a part of. Possible values include:
   * 'inkDrawing', 'inkWriting'
   */
  kind?: Kind;
}

/**
 * This shows the expected contents of a response from the service
 */
export interface AnalysisResponse {
  /**
   * This is the physical unit of the ink strokes. It is up to the application developer to decide
   * how to convert the device specific units to physical units before calling the service. The
   * conversion factor can be different based on the type of the device used. Possible values
   * include: 'mm', 'cm', 'in'
   */
  unit?: Unit;
  /**
   * This is a scaling factor to be applied to the point coordinates when interpreting them in the
   * physical units specified.
   */
  unitMultiple?: number;
  /**
   * This is the language used for recognizing handwriting from the ink strokes in the request.
   */
  language?: string;
  recognitionUnits: RecognitionUnitItem[];
}

/**
 * An interface representing ErrorModelDetailsItem.
 */
export interface ErrorModelDetailsItem {
  /**
   * This represents the error code
   */
  code?: string;
  /**
   * This represents the error message
   */
  message?: string;
  /**
   * This represents the target of the error message
   */
  target?: string;
}

/**
 * An interface representing ErrorModel.
 */
export interface ErrorModel {
  /**
   * This represents the error code
   */
  code: string;
  /**
   * This represents the error message
   */
  message: string;
  /**
   * This represents the target of the error message
   */
  target?: string;
  /**
   * This gives details of the reason(s) for the error
   */
  details?: ErrorModelDetailsItem[];
}

/**
 * This shows the expected contents of a request
 */
export interface AnalysisRequest {
  /**
   * This describes the domain of the client application. Possible values include: 'drawing',
   * 'writing', 'mixed'
   */
  applicationType?: Application;
  /**
   * This identifies the kind of device used as the writing instrument. Possible values include:
   * 'digitizer', 'pen', 'lightPen', 'touchScreen', 'touchPad', 'whiteBoard', '3dDigitizer',
   * 'stereoPlotter', 'articulatedArm', 'armature'
   */
  inputDeviceKind?: InputDevice;
  /**
   * This is the physical unit of the ink strokes. It is up to the application developer to decide
   * how to convert the device specific units to physical units before calling the service. The
   * conversion factor can be different based on the type of the device used. Possible values
   * include: 'mm', 'cm', 'in'
   */
  unit?: Unit;
  /**
   * This is a scaling factor to be applied to the point coordinates when interpreting them in the
   * physical units specified.
   */
  unitMultiple?: number;
  /**
   * The IETF BCP 47 language code (for ex. en-US, en-GB, hi-IN etc.) of the expected language for
   * the handwritten content in the ink strokes. The response will include results from this
   * language.
   */
  language: string;
  inkPointValueAttributes?: InkPointValueAttribute[];
  /**
   * This is the array of strokes sent for recognition. Best results are produced when the order of
   * strokes added in the array matches the order in which the user created them. Changing the
   * stroke order may produce unexpected results.
   */
  strokes: Stroke[];
}

/**
 * Optional Parameters.
 */
export interface InkRecognizerRecognizeOptionalParams extends msRest.RequestOptionsBase {
  /**
   * The request id used to uniquely identify each request during troubleshooting. This is an
   * optional parameter useful for correlating logs and other artifacts.
   */
  xMsClientRequestId?: string;
}

/**
 * Defines values for RasterOp.
 * Possible values include: 'noOperation', 'copyPen', 'maskPen'
 * @readonly
 * @enum {string}
 */
export type RasterOp = 'noOperation' | 'copyPen' | 'maskPen';

/**
 * Defines values for Tip.
 * Possible values include: 'ellipse', 'rectangle'
 * @readonly
 * @enum {string}
 */
export type Tip = 'ellipse' | 'rectangle';

/**
 * Defines values for Shape.
 * Possible values include: 'drawing', 'square', 'rectangle', 'circle', 'ellipse', 'triangle',
 * 'isoscelesTriangle', 'equilateralTriangle', 'rightTriangle', 'quadrilateral', 'diamond',
 * 'trapezoid', 'parallelogram', 'pentagon', 'hexagon', 'blockArrow', 'heart', 'starSimple',
 * 'starCrossed', 'cloud', 'line', 'curve', 'polyLine'
 * @readonly
 * @enum {string}
 */
export type Shape = 'drawing' | 'square' | 'rectangle' | 'circle' | 'ellipse' | 'triangle' | 'isoscelesTriangle' | 'equilateralTriangle' | 'rightTriangle' | 'quadrilateral' | 'diamond' | 'trapezoid' | 'parallelogram' | 'pentagon' | 'hexagon' | 'blockArrow' | 'heart' | 'starSimple' | 'starCrossed' | 'cloud' | 'line' | 'curve' | 'polyLine';

/**
 * Defines values for Category.
 * Possible values include: 'root', 'writingRegion', 'paragraph', 'line', 'inkBullet',
 * 'inkDrawing', 'inkWord', 'unknown'
 * @readonly
 * @enum {string}
 */
export type Category = 'root' | 'writingRegion' | 'paragraph' | 'line' | 'inkBullet' | 'inkDrawing' | 'inkWord' | 'unknown';

/**
 * Defines values for Container.
 * Possible values include: 'root', 'writingRegion', 'paragraph', 'line'
 * @readonly
 * @enum {string}
 */
export type Container = 'root' | 'writingRegion' | 'paragraph' | 'line';

/**
 * Defines values for Leaf.
 * Possible values include: 'inkDrawing', 'inkBullet', 'inkWord', 'unknown'
 * @readonly
 * @enum {string}
 */
export type Leaf = 'inkDrawing' | 'inkBullet' | 'inkWord' | 'unknown';

/**
 * Defines values for Kind.
 * Possible values include: 'inkDrawing', 'inkWriting'
 * @readonly
 * @enum {string}
 */
export type Kind = 'inkDrawing' | 'inkWriting';

/**
 * Defines values for Unit.
 * Possible values include: 'mm', 'cm', 'in'
 * @readonly
 * @enum {string}
 */
export type Unit = 'mm' | 'cm' | 'in';

/**
 * Defines values for Application.
 * Possible values include: 'drawing', 'writing', 'mixed'
 * @readonly
 * @enum {string}
 */
export type Application = 'drawing' | 'writing' | 'mixed';

/**
 * Defines values for InputDevice.
 * Possible values include: 'digitizer', 'pen', 'lightPen', 'touchScreen', 'touchPad',
 * 'whiteBoard', '3dDigitizer', 'stereoPlotter', 'articulatedArm', 'armature'
 * @readonly
 * @enum {string}
 */
export type InputDevice = 'digitizer' | 'pen' | 'lightPen' | 'touchScreen' | 'touchPad' | 'whiteBoard' | '3dDigitizer' | 'stereoPlotter' | 'articulatedArm' | 'armature';

/**
 * Defines values for ClassProperty.
 * Possible values include: 'container', 'leaf'
 * @readonly
 * @enum {string}
 */
export type ClassProperty = 'container' | 'leaf';

/**
 * Contains response data for the recognize operation.
 */
export type InkRecognizerRecognizeResponse = AnalysisResponse & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: AnalysisResponse;
    };
};
