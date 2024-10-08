export const successResponse = (res, data, message = 'Success') => {
    res.status(200).json({ success: true, message, data });
  };
  
  export const errorResponse = (res, message = 'Error', statusCode = 400) => {
    res.status(statusCode).json({ success: false, message });
  };
  