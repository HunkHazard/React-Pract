import React from "react";
import image from "../assets/bluesky.jpg";

interface TableProps {
  data: (number | string)[][];
}

const Table = ({ data }: TableProps) => {
  return (
    <div
      className="container mt-2 p-3"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        color: "white",
      }}
    >
      <table>
        <thead style={{ background: "white", color: "#36016f" }}>
          <th colSpan={9}>Inside Temp/Hum</th>
          <th colSpan={3}>Barometer</th>
        </thead>

        <tbody>
          <tr style={{ background: "white", color: "#36016f" }}>
            <th>
              Date & Time <br />
              <span style={{ fontSize: "13px" }}>Hide Units</span>{" "}
            </th>
            <th>Inside Temp &deg;C</th>
            <th>Inside High Temp &deg;C</th>
            <th>Inside Low Temp &deg;C</th>
            <th>Inside Hum &#37; </th>
            <th>Inside High Hum &#37; </th>
            <th>Inside Low Hum &#37;</th>
            <th>Inside Dew Index &deg;C</th>
            <th>Inside Heat Index &deg;C</th>
            <th>
              High Bar
              <span style={{ fontSize: "13px" }}>
                {" "}
                <br /> in Hg
              </span>{" "}
            </th>
            <th>
              Low Bar
              <span style={{ fontSize: "13px" }}>
                <br />
                in Hg
              </span>
            </th>
            <th>
              Absolute Pressure
              <span style={{ fontSize: "13px" }}>
                {" "}
                <br /> in Hg
              </span>
            </th>
          </tr>
          {data.map((row, index1) => {
            return (
              <tr key={index1}>
                {row.map((item, index) => {
                  if (index === 0) {
                    return (
                      <td style={{ background: "white", color: "#36016f" }}>
                        {item}
                      </td>
                    );
                  }
                  if (index % 2 === 0) {
                    return (
                      <td
                        style={{
                          background: "black",

                          opacity: "30%",
                          fontWeight: "bolder",
                          textAlign: "center",
                          textShadow: "1px 1px 1px #36016f",
                        }}
                        key={index}
                      >
                        {item}
                      </td>
                    );
                  } else {
                    return (
                      <td
                        style={{
                          // background: "white",
                          // opacity: "50%",
                          fontWeight: "bolder",
                          textAlign: "center",
                          textShadow: "1px 1px 1px #36016f",
                        }}
                        key={index}
                      >
                        {item}
                      </td>
                    );
                  }
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
