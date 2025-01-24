import {
  createUser,
  deleteUser,
  getAllUsers,
  getUserById,
  updateUser,
} from '../controllers/usersControllers.js';

// Helper function to send responses
const sendResponse = (res, statusCode, data) => {
  res.writeHead(statusCode, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(data));
};

// Helper function to send errors
const sendError = (res, statusCode, message) => {
  sendResponse(res, statusCode, { message });
};

// Helper function to parse request body
const parseRequestBody = async (req) => {
  let body = '';
  for await (const chunk of req) {
    body += chunk.toString();
  }
  return JSON.parse(body);
};

// const analyseUrl = (url) => {
//   const parts = url.split('/');
//   console.log('urlParts:', parts);

//   const route = parts[1];
//   const id = parts[2];

//   console.log(route);
//   console.log(id);

//   return { route, id };
// };

// analyseUrl('/users/1');

// ROUTER LOGIC
export const usersRouter = async (req, res) => {
  const url = req.url.split('/');
  const id = url[2];

  if (!req.url.startsWith('/users')) {
    sendError(res, 404, 'Not Found');
  }

  try {
    switch (req.method) {
      case 'GET': {
        if (id) {
          const user = await getUserById(id);
          user
            ? sendResponse(res, 200, user)
            : sendError(res, 404, `User with ID ${id} was not found`);
        } else {
          const users = await getAllUsers();
          sendResponse(res, 200, users);
        }
        break;
      }
      case 'POST': {
        const { name, age } = await parseRequestBody(req);
        if (!name || !age) {
          sendError(res, 400, 'Please provide name and age');
          return;
        }
        const newUser = await createUser(name, age);
        sendResponse(res, 201, newUser);
        break;
      }

      case 'PUT': {
        if (!id) {
          sendError(res, 400, 'User id is required to update a user');
          return;
        }
        const { name, age } = await parseRequestBody(req);
        if (!name || !age) {
          sendError(res, 400, 'Please provide name and age');
          return;
        }
        const updatedUser = await updateUser(id, name, age);
        updatedUser
          ? sendResponse(res, 200, updatedUser)
          : sendError(res, 404, 'User not found');
        break;
      }
      case 'DELETE': {
        if (!id) {
          sendError(res, 400, 'User id is required to delete a user');
          return;
        }
        await deleteUser(id);
        sendResponse(res, 200, `User with ID ${id} was deleted`);
        break;
      }
      default:
        sendError(res, 500, 'Method not allowed');
    }
  } catch (error) {
    console.error(`Error in ${req.method} ${req.url}:`, error);
    sendError(res, 500, 'An error occured');
  }
};
