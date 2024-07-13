import Users from "../components/Users";

async function fetchUsers() {
  const rest = await fetch("https://reqres.in/api/users");
  const data = await rest.json();
  return data.data;
}

async function HomePage() {
  const users = await fetchUsers();
  return (
    <Users users={users}/>
  );
}

export default HomePage;
