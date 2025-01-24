import pool from '../db/index.js';

export const getAllUsers = async () => {
  try {
    const result = await pool.query('SELECT * FROM users');
    return result.rows;
  } catch (error) {
    console.error('Error fetching all users', error);
  }
};

export const getUserById = async (id) => {
  try {
    const result = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
    if (result.rows.length === 0) {
      return null;
    }
    return result.rows[0];
  } catch (error) {
    console.error('Error fetching user', error);
  }
};

export const createUser = async (name, age) => {
  try {
    const result = await pool.query(
      'INSERT INTO users (name, age) VALUES ($1, $2) RETURNING *',
      [name, age]
    );
    return result.rows[0];
  } catch (error) {
    console.error('Error creating user', error);
  }
};

export const updateUser = async (id, name, age) => {
  try {
    const result = await pool.query(
      'UPDATE users SET name = $1, age = $2 WHERE id = $3 RETURNING *',
      [name, age, id]
    );
    if (result.rows.length === 0) {
      return null;
    }
    return result.rows[0];
  } catch (error) {
    console.error('Error updating user', error);
  }
};

export const deleteUser = async (id) => {
  try {
    const result = await pool.query(
      'DELETE FROM users WHERE id = $1 RETURNING *',
      [id]
    );
    if (result.rows.length === 0) {
      return null;
    }
    return result.rows[0];
  } catch (error) {
    console.error('Error deleting user', error);
  }
};
