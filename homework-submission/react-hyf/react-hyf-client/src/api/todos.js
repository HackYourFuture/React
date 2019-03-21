export const getAll = async () => {
  const response = await fetch('/todos');
  const data = await response.json();
  return data;
};

export const create = async text => {
  const response = await fetch('/todos', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      text,
    }),
  });
  const data = await response.json();
  return data;
};

export const remove = async id => {
  const response = await fetch(`/todos/${id}`, {
    method: 'DELETE',
  });
  const data = await response.json();
  return data;
};
