export async function loginFn(dataForm) {
  const response = await fetch(
    "https://linked-posts.routemisr.com/users/signin",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataForm),
    }
  );
  const data = await response.json();
  return data;
}
