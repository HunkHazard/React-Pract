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
        borderRadius: "10px",
      }}
    >
      <table>
        <thead
          style={{ background: "white", color: "#36016f", textAlign: "center" }}
        >
          <th colSpan={9}>Inside Temp/Hum</th>
          <th colSpan={3}>Barometer</th>
        </thead>

        <tbody style={{ textAlign: "center" }}>
          <tr style={{ background: "white", color: "#36016f" }}>
            <th>
              Date & Time <br />
              <span style={{ fontSize: "13px" }}>Hide Units</span>{" "}
            </th>
            <th>
              Inside Temp <br /> &deg;C
            </th>
            <th>
              Inside High Temp <br /> &deg;C
            </th>
            <th>
              Inside Low Temp
              <br /> &deg;C
            </th>
            <th>
              Inside Hum <br /> &#37;{" "}
            </th>
            <th>
              Inside High Hum <br /> &#37;{" "}
            </th>
            <th>
              Inside Low Hum <br /> &#37;
            </th>
            <th>
              Inside Dew Index <br /> &deg;C
            </th>
            <th>
              Inside Heat Index <br /> &deg;C
            </th>
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
              <tr key={index1} style={{}}>
                {row.map((item, index) => {
                  if (index === 0) {
                    return (
                      <td
                        style={{
                          background: "white",
                          color: "#36016f",
                          width: "175px",
                          height: "50px",
                        }}
                      >
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
