import React, { useEffect, useState } from "react";
import axios from "axios";
import _ from "lodash";

const pageSize = 10;
export default function Table() {
  const [data, setData] = useState([]);
  const [paginatedData, setPaginatedData] = useState();
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const begin = 1517227200;
    const end = 1517230800;
    const icao24 = "EDDF";
    axios
      .get(
        `https://opensky-network.org/api/flights/all?begin=${begin}&end=${end}`
      )
      .then((response) => {
        console.log(response);
        setData(response.data);
        setPaginatedData(_(response.data).slice(0).take(pageSize).value());
      })
      .catch((error) => {
        console.log(error.response.status);
        console.log(error.message);
      });
  }, []);

  const pageCount = data ? Math.ceil(data.length / pageSize) : 0;
  if (pageCount === 1) return null;
  // const pages = _.range(1, pageCount + 1);

  const pagination = (pageNo) => {
    setCurrentPage(pageNo);
    const startIndex = (pageNo - 1) * pageSize;
    const paginatedPage = _(data).slice(startIndex).take(pageSize).value();
    setPaginatedData(paginatedPage);
  };

  return (
    <div>
      {!paginatedData ? (
        "No data found"
      ) : (
        <>
          <div className="flex flex-col bg-slate-100">
            <div className="my-1 overflow-x-auto mx-2">
              <div className="py-2 align-middle inline-block min-w-full md:px-5">
                <div className="shadow-2xl overflow-hidden border-b border-gray-400 rounded-lg">
                  <table className="table-auto min-w-full divide-y divide-gray-400 mt-4">
                    <thead className="bg-white table-header-group">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-2 text-left text-lg font-bold uppercase tracking-wider text-[#1A2F67]"
                        >
                          Airport
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-2 text-left text-lg font-bold uppercase tracking-wider text-[#1A2F67]"
                        >
                          Time
                        </th>
                        <th scope="col" className="px-6 py-2 whitespace-nowrap">
                          <h1 className="py-2 text-left text-lg font-bold uppercase tracking-wider text-[#1A2F67]">
                            Arrival
                          </h1>
                        </th>
                        <th scope="col" className="px-6 py-2 whitespace-nowrap">
                          <h1 className="py-2 text-left text-lg font-bold uppercase tracking-wider text-[#1A2F67]">
                            Departure
                          </h1>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {paginatedData.map((flight, index) => (
                        <tr key={index}>
                          <td className="px-6 py-2 text-lg font-bold text-gray-800 whitespace-nowrap">
                            {flight.estDepartureAirport}
                          </td>
                          <td className="px-6 py-2 text-lg font-bold text-gray-800 whitespace-nowrap">
                            {new Date(
                              flight.firstSeen * 1000
                            ).toLocaleTimeString()}
                          </td>
                          <td className="px-6 py-2 text-lg font-bold text-gray-800 whitespace-nowrap">
                            {flight.estArrivalAirport}
                          </td>
                          <td className="px-6 py-2 text-lg font-bold text-gray-800 whitespace-nowrap">
                            {flight.estDepartureAirport}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <nav className="flex justify-center items-center p-3">
              <ul className="flex cursor-pointer">
                {currentPage > 1 && (
                  <li className="px-3">
                    <button
                      className="bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded"
                      onClick={() => pagination(currentPage - 1)}
                    >
                      Previous
                    </button>
                  </li>
                )}

                <li className="px-3">
                    <p className="bg-blue-500 text-white py-2 px-4 rounded">{currentPage}</p>
                </li>

                {currentPage < pageCount && (
                  <li className="px-3">
                    <button
                      className="bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded"
                      onClick={() => pagination(currentPage + 1)}
                    >
                      Next
                    </button>
                  </li>
                )}
              </ul>
            </nav>
          </div>
        </>
      )}
    </div>
  );
}
