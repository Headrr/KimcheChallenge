import React, { useState } from "react";
import ReactDOM from "react-dom";
import { ApolloClient, InMemoryCache, useQuery } from "@apollo/client";
import Header from "./components/header";
import Footer from "./components/footer";
import SearchIcon from "@material-ui/icons/Search";
import { Grid, Paper } from "@material-ui/core";
import { COUNTRIES_QUERY } from "./graphql/queries";
import { Button } from "@material-ui/core";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "https://countries.trevorblades.com",
});

const CountryList = () => {

  const { data, loading } = useQuery(COUNTRIES_QUERY, {
    client,
  }); 

  // # Capitalizar el input
  // function capital(string) {
  //   var capitalize = "";
  //   capitalize = console.log(
  //     string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
  //   );
  //   return capitalize;
  // }

  const [approvalVariable, setApprovalVariable] = useState("");
  const [cont, setCont] = useState("1");

  if (loading) {
    return <p>Loading...</p>;
  }

  const { countries } = data;

  let filteredData = countries.filter((x) =>
    String(x.name).includes(approvalVariable)
  );

  const setColor = () => {
    if (cont === "1") return "primary";
    else return "";
  };

  const setColorDis = () => {
    if (cont === "0") return "primary";
    else return "";
  };

  return (
    <>
      <Header></Header>

      <h3>Some random text {"\n"}</h3>
      <div>
        <SearchIcon style={{ fontSize: 20 }} />
        <input
          type="text"
          style={{ borderRadius: 5 }}
          value={approvalVariable}
          onChange={(event) => {
            setApprovalVariable(event.target.value);
            console.log(event.target.value);
          }}
        />
        <span font="italic" style={{ font: "italic" }}>
          {" "}
          Enter the first letter in uppercase and the rest in lowercase
        </span>
      </div>

      <div>
        <h2>
          Group by:{" "}
          <Button
            variant="contained"
            color={setColor()}
            onClick={() => {
              setCont("1");
              setColor("0");
            }}
          >
            Continent
          </Button>
          {"  "}
          <Button
            variant="contained"
            color={setColorDis()}
            onClick={() => setCont("0")}
          >
            Language
          </Button>
        </h2>
      </div>

      {/* ========== Search by continent ========== */}
      {cont === "1" ? (
        <div style={{marginBottom: 40}}>
          <h1 style={{backgroundColor: '#20556E', width: 180, padding: 10, borderRadius: 10, color: 'white'}}>By continent</h1>

          {countries.length === 0
            ? null
            : filteredData
                .filter((conti) => conti.continent.code === "AN")
                .slice(0, 1)
                .map((c, i) => (
                  <div key={c.code}>
                    <h2>
                      {" "}
                      <li>Antarctica</li>
                    </h2>
                  </div>
                ))}

          {countries.length === 0
            ? null
            : filteredData
                .filter((conti) => conti.continent.code.includes("AN"))
                .map((c, i) => (
                  <Grid item xs={10} sm={5} style={{ padding: 10 }}>
                    <Paper>
                      <div
                        style={{
                          backgroundColor: "gray",
                          borderRadius: 7,
                          color: "white",
                        }}
                      >
                        <h3 style={{ padding: 10 }}>{c.name}</h3>
                        <ul style={{ padding: 5, marginLeft: 20 }}>
                          <li>
                            <strong>Capital: </strong>
                            <span>{c.capital}</span>
                          </li>
                          <li>
                            <strong>Currency: </strong>
                            <span>{c.currency}</span>
                          </li>
                        </ul>
                      </div>
                    </Paper>
                  </Grid>
                ))}

          {/* ==================== */}

          {countries.length === 0
            ? null
            : filteredData
                .filter((conti) => conti.continent.code === "AS")
                .slice(0, 1)
                .map((c, i) => (
                  <div key={c.code}>
                    <h2>
                      <li>Asia</li>
                    </h2>
                  </div>
                ))}

          {countries.length === 0
            ? null
            : filteredData
                .filter((conti) => conti.continent.code.includes("AS"))
                .map((c, i) => (
                  <Grid item xs={10} sm={5} style={{ padding: 10 }}>
                    <Paper>
                      <div
                        style={{
                          backgroundColor: "gray",
                          borderRadius: 7,
                          color: "white",
                        }}
                      >
                        <h3 style={{ padding: 10 }}>{c.name}</h3>
                        <ul style={{ padding: 5, marginLeft: 20 }}>
                          <li>
                            <strong>Capital: </strong>
                            <span>{c.capital}</span>
                          </li>
                          <li>
                            <strong>Currency: </strong>
                            <span>{c.currency}</span>
                          </li>
                        </ul>
                      </div>
                    </Paper>
                  </Grid>
                ))}

          {/* ==================== */}

          {countries.length === 0
            ? null
            : filteredData
                .filter((conti) => conti.continent.code === "EU")
                .slice(0, 1)
                .map((c, i) => (
                  <div key={c.code}>
                    <h2>
                      <li>Europe</li>
                    </h2>
                  </div>
                ))}

          {countries.length === 0
            ? null
            : filteredData
                .filter((conti) => conti.continent.code.includes("EU"))
                .map((c, i) => (
                  <Grid item xs={10} sm={5} style={{ padding: 10 }}>
                    <Paper>
                      <div
                        style={{
                          backgroundColor: "gray",
                          borderRadius: 7,
                          color: "white",
                        }}
                      >
                        <h3 style={{ padding: 10 }}>{c.name}</h3>
                        <ul style={{ padding: 5, marginLeft: 20 }}>
                          <li>
                            <strong>Capital: </strong>
                            <span>{c.capital}</span>
                          </li>
                          <li>
                            <strong>Currency: </strong>
                            <span>{c.currency}</span>
                          </li>
                        </ul>
                      </div>
                    </Paper>
                  </Grid>
                ))}

          {/* ==================== */}

          {countries.length === 0
            ? null
            : filteredData
                .filter((conti) => conti.continent.code === "NA")
                .slice(0, 1)
                .map((c, i) => (
                  <div key={c.code}>
                    <h2>
                      <li>North America</li>
                    </h2>
                  </div>
                ))}

          {countries.length === 0
            ? null
            : filteredData
                .filter((conti) => conti.continent.code.includes("NA"))
                .map((c, i) => (
                  <Grid item xs={10} sm={5} style={{ padding: 10 }}>
                    <Paper>
                      <div
                        style={{
                          backgroundColor: "gray",
                          borderRadius: 7,
                          color: "white",
                        }}
                      >
                        <h3 style={{ padding: 10 }}>{c.name}</h3>
                        <ul style={{ padding: 5, marginLeft: 20 }}>
                          <li>
                            <strong>Capital: </strong>
                            <span>{c.capital}</span>
                          </li>
                          <li>
                            <strong>Currency: </strong>
                            <span>{c.currency}</span>
                          </li>
                        </ul>
                      </div>
                    </Paper>
                  </Grid>
                ))}

          {/* ==================== */}

          {countries.length === 0
            ? null
            : filteredData
                .filter((conti) => conti.continent.code === "OC")
                .slice(0, 1)
                .map((c, i) => (
                  <div key={c.code}>
                    <h2>
                      <li>Oceania</li>
                    </h2>
                  </div>
                ))}

          {countries.length === 0
            ? null
            : filteredData
                .filter((conti) => conti.continent.code.includes("OC"))
                .map((c, i) => (
                  <Grid item xs={10} sm={5} style={{ padding: 10 }}>
                    <Paper>
                      <div
                        style={{
                          backgroundColor: "gray",
                          borderRadius: 7,
                          color: "white",
                        }}
                      >
                        <h3 style={{ padding: 10 }}>{c.name}</h3>
                        <ul style={{ padding: 5, marginLeft: 20 }}>
                          <li>
                            <strong>Capital: </strong>
                            <span>{c.capital}</span>
                          </li>
                          <li>
                            <strong>Currency: </strong>
                            <span>{c.currency}</span>
                          </li>
                        </ul>
                      </div>
                    </Paper>
                  </Grid>
                ))}

          {/* ==================== */}

          {countries.length === 0
            ? null
            : filteredData
                .filter((conti) => conti.continent.code === "SA")
                .slice(0, 1)
                .map((c, i) => (
                  <div key={c.code}>
                    <h2>
                      <li>South America</li>
                    </h2>
                  </div>
                ))}

          {countries.length === 0
            ? null
            : filteredData
                .filter((conti) => conti.continent.code.includes("SA"))
                .map((c, i) => (
                  <Grid item xs={10} sm={5} style={{ padding: 10 }}>
                    <Paper>
                      <div
                        style={{
                          backgroundColor: "gray",
                          borderRadius: 7,
                          color: "white",
                        }}
                      >
                        <h3 style={{ padding: 10 }}>{c.name}</h3>
                        <ul style={{ padding: 5, marginLeft: 20 }}>
                          <li>
                            <strong>Capital: </strong>
                            <span>{c.capital}</span>
                          </li>
                          <li>
                            <strong>Currency: </strong>
                            <span>{c.currency}</span>
                          </li>
                        </ul>
                      </div>
                    </Paper>
                  </Grid>
                ))}
        </div>
      ) : (
        <div>
          <h1 style={{backgroundColor: '#B0BD3E', width: 180, padding: 10, borderRadius: 10, color: 'white'}}>By language</h1>
          {/* lógica para búsqueda por "language" */}
        </div>
      )}
      <Footer></Footer>
    </>
  );
};

ReactDOM.render(<CountryList />, document.getElementById("root"));
