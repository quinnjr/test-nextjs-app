import React, { useEffect, useState } from 'react';
import { Table } from 'flowbite-react';

import ServerSideUsersTable from '@/components/ServerSideUsersTable';

export default function Home() {
  // const [users, setUsers]: [any[], any] = useState([]);

  // useEffect(() => {
  //   const fetchUsers = async () => {
  //     const response = await fetch('/api/users');
  //     const data = await response.json();

  //     setUsers(data);
  //   }

  //   fetchUsers();
  // }, []);

  return (
  //  <Table>
  //   <Table.Head>
  //     <Table.HeadCell>ID</Table.HeadCell>
  //     <Table.HeadCell>First Name</Table.HeadCell>
  //     <Table.HeadCell>Last Name</Table.HeadCell>
  //   </Table.Head>
  //   <Table.Body>
  //     {users.map((user: any) => (
  //         <Table.Row key={user.id}>
  //           <Table.Cell>{user.id}</Table.Cell>
  //           <Table.Cell>{user.firstName}</Table.Cell>
  //           <Table.Cell>{user.lastName}</Table.Cell>
  //         </Table.Row>
  //     ))}
  //   </Table.Body>
  //  </Table>
    <div>
      <ServerSideUsersTable />
    </div>
  );
}
