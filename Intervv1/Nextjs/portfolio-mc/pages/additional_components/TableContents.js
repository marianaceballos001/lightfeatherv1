import { Row, Col, Table } from "reactstrap";
import Link from "next/link";


const TableContents = () => {
  return (
    <>
      <Table bordered
      hover
      responsive
      className="table"

       >
        <thead>
          <tr className="name text-light">
            <th>URL</th>
            <th>Main Tech</th>
            <th>Deployment</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <Link href="/">
              <td>mcworks.net</td>
            </Link>
            <Link href="/">
              <td>Next</td>
            </Link>
            <Link href="/">
              <td>Vercel</td>
            </Link>
          </tr>
          <tr>
            <Link href="https://studentfactbook2022.vercel.app/">
              <td>https://studentfactbook2022.vercel.app/</td>
            </Link>
            <Link href="https://studentfactbook2022.vercel.app/">
              <td>React</td>
            </Link>
            <Link href="https://studentfactbook2022.vercel.app/">
              <td>Vercel</td>
            </Link>
          </tr>
          <tr>
            <Link href="https://transferstudents2012-2014.vercel.app/">
              <td>https://transferstudents2012-2014.vercel.app/</td>
            </Link>
            <Link href="https://transferstudents2012-2014.vercel.app/">
              <td>React</td>
            </Link>
            <Link href="https://transferstudents2012-2014.vercel.app/">
              <td>Vercel</td>
            </Link>
          </tr>
          <tr>
            <Link href="https://mcam.vercel.app/">
              <td>https://mcam.vercel.app/</td>
            </Link>
            <Link href="https://mcam.vercel.app/">
              <td>React</td>
            </Link>
            <Link href="https://mcam.vercel.app/">
              <td>Vercel</td>
            </Link>
          </tr>
          <tr>
            <Link href="https://pmblog.vercel.app/">
              <td>https://pmblog.vercel.app/</td>
            </Link>
            <Link href="https://pmblog.vercel.app/">
              <td>React</td>
            </Link>
            <Link href="https://pmblog.vercel.app/">
              <td>Vercel</td>
            </Link>
          </tr>
          <tr>
            <Link href="http://adaceballosrealty.com/">
              <td>http://adaceballosrealty.com/</td>
            </Link>
            <Link href="http://adaceballosrealty.com/">
              <td>HTML, CSS, Bootstrap</td>
            </Link>
            <Link href="http://adaceballosrealty.com/">
              <td>AWS</td>
            </Link>
          </tr>

        </tbody>
      </Table>
    </>
  );
};

export default TableContents;
