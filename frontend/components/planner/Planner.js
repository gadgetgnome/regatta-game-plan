import {
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Tfoot,
} from "@chakra-ui/react";
import Waypoint from "./Waypoint";

export default function Planner({ route }) {
  return (
    <TableContainer maxWidth="1200px">
      <Table variant="simple">
        <TableCaption>Imperial to metric conversion factors</TableCaption>
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th isNumeric>lat</Th>
            <Th isNumeric>lon</Th>
            <Th isNumeric>course</Th>
            <Th isNumeric>dist</Th>
            <Th isNumeric>time</Th>
          </Tr>
        </Thead>
        <Tbody>
          {route.map((waypoint, i, waypoints) => {
            const nextWaypoint =
              i + 1 < waypoints.length ? waypoints[i + 1] : undefined;
            return (
              <Waypoint
                waypoint={waypoint}
                key={i}
                index={i}
                nextWaypoint={nextWaypoint}
              />
            );
          })}
        </Tbody>
        <Tfoot>
          <Tr>
            <Th>To convert</Th>
            <Th>into</Th>
            <Th isNumeric>multiply by</Th>
          </Tr>
        </Tfoot>
      </Table>
    </TableContainer>
  );
}
