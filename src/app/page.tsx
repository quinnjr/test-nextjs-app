'use client'

import type { User } from '@prisma/client';
import React, { useEffect, useState } from 'react';
import { Table } from 'flowbite-react';

export default function Home() {
  const [users, setUsers] = useState<User[]>([]);
  const [limit, setLimit] = useState<number>(10)

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch(`/api/users?limit=${limit}`);
      const data = await response.json();

      setUsers(data);
    }

    fetchUsers();
  }, [limit]);

  return (
    <div>
      <Table>
        <Table.Head>
          <Table.HeadCell>ID</Table.HeadCell>
          <Table.HeadCell>First Name</Table.HeadCell>
          <Table.HeadCell>Last Name</Table.HeadCell>
        </Table.Head>
        <Table.Body>
          {users.map((user: any) => (
              <Table.Row key={user.id}>
                <Table.Cell>{user.id}</Table.Cell>
                <Table.Cell>{user.firstName}</Table.Cell>
                <Table.Cell>{user.lastName}</Table.Cell>
              </Table.Row>
          ))}
        </Table.Body>
      </Table>
      <div>
        <label htmlFor="limit">Limit: </label>
        <input type="number" id="limit" value={limit} onChange={(e) => setLimit(parseInt(e.target.value))} />
      </div>
    </div>
  );
}
