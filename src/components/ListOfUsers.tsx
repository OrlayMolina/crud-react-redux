import {
    Card,
    Table,
    TableRow,
    TableCell,
    TableHead,
    TableHeaderCell,
    TableBody
  } from "@tremor/react";
  
  const users: {
    id: string,
    name: string,
    email: string,
    github:string

  }[] = [
    {
      id: "1",
      name: "Peter Doe",
      email: "peter@gmail.com",
      github: "peter"
    },
    {
        id: "2",
        name: "Ana",
        email: "ana@gmail.com",
        github: "ana"
    },
    {
        id: "3",
        name: "John",
        email: "john@gmail.com",
        github: "john"
    }
  ];
  
  export default function ListOfUsers() {
    return (
      <Card>
        <Table>
          <TableHead>
            <TableRow>
              <TableHeaderCell>Name</TableHeaderCell>
              <TableHeaderCell>Id</TableHeaderCell>
              <TableHeaderCell>Nombre </TableHeaderCell>
              <TableHeaderCell>Email </TableHeaderCell>
              <TableHeaderCell>Acciones</TableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((item) => (
              <TableRow key={item.name}>
                <TableCell>{item.id}</TableCell>
                <TableCell className="flex items-center">
                    <img
                        className="w-12 h-12 border rounded-full"
                        src={`https://unavatar.io/github/${item.github}`}
                        alt={item.name}
                    />
                    {item.name}
                </TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell>
                  Acciones
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    );
  }