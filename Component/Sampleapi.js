import React from "react";
import style from "../styles/Home.module.css";
import { Row, Col } from "react-bootstrap";
import Meta from "./meta";
import Link from "next/link";

function Sampleapi({ article }) {
  return (
    <div>
      <Meta title="Api" />
      <Row>
        {article.map((a, i) => {
          return (
            <Col md={4} key={i}>
              <Link href={`sample/${a.id}`}>
                <div key={i} className={style.card}>
                  <h3>{a.title}</h3>
                  {/* <p>{a.body}</p> */}
                </div>
              </Link>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}

export default Sampleapi;
