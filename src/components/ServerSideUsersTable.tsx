'use server'

import React from 'react';
import { Table, TableBody, TableHead, TableHeadCell, TableRow, TableCell } from 'flowbite-react';

import { prisma } from '../services/db';

export default async function ServerSideUsersTable() {
  const users = await prisma.user.findMany();

  return (
    <Table>
      <TableHead>
        <TableHeadCell>ID</TableHeadCell>
        <TableHeadCell>First Name</TableHeadCell>
        <TableHeadCell>Last Name</TableHeadCell>
      </TableHead>
      <TableBody>
        {await users.map((user) => (
          <TableRow key={user.id}>
            <TableCell>{user.id}</TableCell>
            <TableCell>{user.firstName}</TableCell>
            <TableCell>{user.lastName}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}