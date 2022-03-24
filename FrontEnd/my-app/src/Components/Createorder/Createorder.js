import React, { useEffect, useState } from "react";
import "./Createorder.css";
import Header from "../Header/Header";
import Aside from "../Aside/Aside";
import Footer from "../Footer1/Footer";
import search from "../../pics/search.svg";
import shirt from "../../pics/shirt.jpg";
import tshirt from "../../pics/T-shirt.jpg";
import trouser from "../../pics/trouser.jpg";
import jean from "../../pics/jeans.jpg";
import boxer from "../../pics/boxers.jpg";
import jogger from "../../pics/joggers.jpg";
import other from "../../pics/other.jpg";
import wash from "../../pics/washing-machine.svg";
import iron from "../../pics/ironing.svg";
import folding from "../../pics/towel.svg";
import bleach from "../../pics/bleach.svg";
import bwash from "../../pics/bwashing-machine.svg";
import biron from "../../pics/bironing.svg";
import bfolding from "../../pics/btowel.svg";
import bbleach from "../../pics/bbleach.svg";
import { useNavigate } from "react-router-dom";
import { getToken } from "../utility/AuthOpretion";

function CreateOrder() {
  const [item, setitem] = useState({
    name: "",
    quantity: 0,
    actions: [],
    price: 0,
  });
  const [action, setaction] = useState([]);
  const bill = {
    Washing: 20,
    Pressing: 15,
    Folding: 10,
    "Chemical-washing": 25,
  };
  const [product, setproduct] = useState([]);
  const [expression, setexpression] = useState([
    "calculate",
    "calculate",
    "calculate",
    "calculate",
    "calculate",
    "calculate",
    "calculate",
  ]);
  const [cost, setcost] = useState(0);
  const [reset, setreset] = useState(false);
  const [icon, seticon] = useState(0);
  const [color, setcolor] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const navigate = useNavigate();

  function change(e) {
    setaction([]);
    setcost(0);
    setitem({ ...item, name: e.target.id, quantity: e.target.value });
  }
  function selectaction(e) {
    const arr = e.target.id.split(" ");
    const changecolor = [...color];
    changecolor[parseInt(arr[1]) - 1] = !changecolor[parseInt(arr[1]) - 1];
    setcolor(changecolor);
    const res = [...action];
    res.push(arr[0]);

    setaction(res);
    let washcost = cost;
    washcost = washcost + bill[arr[0]];
    setcost(washcost);
  }

  function calculate(e) {
    item.actions = action;
    setitem(item);
    const totalprice = item.quantity * cost;
    item.price = totalprice;
    setitem(item);
    const express =
      item.quantity.toString() +
      "X" +
      cost.toString() +
      " =  " +
      (item.quantity * cost).toString();
    expression[parseInt(e.target.id)] = express;
    console.log(express);
    setexpression(expression);
    console.log(expression);

    const demoproduct = [...product];
    demoproduct.push(item);
    console.log("demo", demoproduct);
    setproduct(demoproduct);
    console.log(product);
    setreset(true);

    console.log("product", product);
  }

  function resetbutton(e) {
    const changecolor = [...color];
    changecolor[parseInt(e.target.id)] = false;
    changecolor[parseInt(e.target.id) + 1] = false;
    changecolor[parseInt(e.target.id) + 2] = false;
    changecolor[parseInt(e.target.id) + 3] = false;
    setcolor(changecolor);
    const demoproduct = [...product];
    demoproduct.pop(item);
    setproduct(demoproduct);
    item.quantity = 0;
    expression[e.target.id] = "calculate";
    setexpression(expression);
    setitem(item);
  }

  async function Create() {
    const response = await fetch("http://localhost:5000/create", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Bearer ${getToken()}`,
      },
      body: JSON.stringify({
        products: product,
      }),
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    });
    console.log(await response.json());
    navigate("/orders");
  }

  return (
    <div>
      <Header />
      <Aside />
      <div>
        <div className="orandin">
          <div className="or">
            <b>Create Order</b>
          </div>
          <div className="in">
            <img src={search} alt="search"></img>
            <input placeholder="search" type="text"></input>
            <div className="bottomline"></div>
          </div>
          <table className="ordertable">
            <thead className="tablehead">
              <tr className="headtitle">
                <th className="producttype">Product Type</th>
                <th className="quantity">Quantity</th>
                <th className="washtype">Wash Type</th>
                <th className="price">Price</th>
              </tr>
            </thead>
            <tbody className="tablebody"></tbody>
            <tr className="shirtrow">
              <td>
                <img className="producticon" src={shirt}></img>
                <span>Shirts</span>
              </td>
              <td>
                <input
                  className="quantitybox"
                  id="Shirts"
                  type="number"
                  onChange={(e) => change(e)}
                />
              </td>
              <td>
                <tr className="iconrow">
                  <td className="icons">
                    <img
                      id="Washing 1"
                      src={color[0] ? bwash : wash}
                      alt="wash"
                      onClick={(e) => selectaction(e)}
                    />
                  </td>
                  <td className="icons">
                    <img
                      id="Pressing 2"
                      src={color[1] ? biron : iron}
                      alt="iron"
                      onClick={(e) => selectaction(e)}
                    />
                  </td>
                  <td className="icons">
                    <img
                      id="Folding 3"
                      src={color[2] ? bfolding : folding}
                      alt="folding"
                      onClick={(e) => selectaction(e)}
                    />
                  </td>
                  <td className="icons">
                    <img
                      id="Chemical-washing 4"
                      src={color[3] ? bbleach : bleach}
                      alt="bleach"
                      onClick={(e) => selectaction(e)}
                    />
                  </td>
                </tr>
              </td>
              <td>
                <button
                  className="disprice"
                  type="submit"
                  id="0"
                  onClick={(e) => {
                    calculate(e);
                  }}
                >
                  {expression[0]}
                </button>
              </td>
              <td>
                {reset ? (
                  <button
                    className="resetbtn"
                    type="submit"
                    id="0"
                    onClick={(e) => {
                      resetbutton(e);
                    }}
                  >
                    Reset
                  </button>
                ) : null}
              </td>
            </tr>
            <tr className="tshirtrow">
              <td>
                <img className="producticon" src={tshirt}></img>
                <span>T-shirts</span>
              </td>
              <td>
                <input
                  className="quantitybox"
                  type="number"
                  id="Tshirts"
                  name="TShirts"
                  onChange={(e) => {
                    change(e);
                  }}
                />
              </td>
              <td>
                <tr className="iconrow">
                  <td className="icons">
                    <img
                      id="Washing 5"
                      src={color[4] ? bwash : wash}
                      alt="wash"
                      onClick={(e) => {
                        selectaction(e);
                      }}
                    />
                  </td>
                  <td className="icons">
                    <img
                      id="Pressing 6"
                      src={color[5] ? biron : iron}
                      alt="iron"
                      onClick={(e) => {
                        selectaction(e);
                      }}
                    />
                  </td>
                  <td className="icons">
                    <img
                      id="Folding 7"
                      src={color[6] ? bfolding : folding}
                      alt="folding"
                      onClick={(e) => {
                        selectaction(e);
                      }}
                    />
                  </td>
                  <td className="icons">
                    <img
                      id="Chemical-washing 8"
                      src={color[7] ? bbleach : bleach}
                      alt="bleach"
                      onClick={(e) => {
                        selectaction(e);
                      }}
                    />
                  </td>
                </tr>
              </td>
              <td>
                <button
                  className="disprice"
                  type="submit"
                  id="1"
                  onClick={(e) => {
                    calculate(e);
                  }}
                >
                  {expression[1]}
                </button>
              </td>
              <td>
                {reset ? (
                  <button
                    className="resetbtn"
                    type="submit"
                    id="1"
                    onClick={(e) => {
                      resetbutton(e);
                    }}
                  >
                    Reset
                  </button>
                ) : null}
              </td>
            </tr>
            <tr className="trouserrow">
              <td>
                <img className="producticon" src={trouser}></img>
                <span>Trousers</span>
              </td>
              <td>
                <input
                  className="quantitybox"
                  type="number"
                  id="Trousers"
                  name="Trousers"
                  onChange={(e) => {
                    change(e);
                  }}
                />
              </td>
              <td>
                <tr className="iconrow">
                  <td className="icons">
                    <img
                      id="Washing 9"
                      src={color[8] ? bwash : wash}
                      alt="wash"
                      onClick={(e) => {
                        selectaction(e);
                      }}
                    />
                  </td>
                  <td className="icons">
                    <img
                      id="Pressing 10"
                      src={color[9] ? biron : iron}
                      alt="iron"
                      onClick={(e) => {
                        selectaction(e);
                      }}
                    />
                  </td>
                  <td className="icons">
                    <img
                      id="Folding 11"
                      src={color[10] ? bfolding : folding}
                      alt="folding"
                      onClick={(e) => {
                        selectaction(e);
                      }}
                    />
                  </td>
                  <td className="icons">
                    <img
                      id="Chemical-Washing 12"
                      src={color[11] ? bbleach : bleach}
                      alt="bleach"
                      onClick={(e) => {
                        selectaction(e);
                      }}
                    />
                  </td>
                </tr>
              </td>
              <td>
                <button
                  className="disprice"
                  type="submit"
                  id="2"
                  onClick={(e) => {
                    calculate(e);
                  }}
                >
                  {expression[2]}
                </button>
              </td>
              <td>
                {reset ? (
                  <button
                    className="resetbtn"
                    type="submit"
                    id="2"
                    onClick={(e) => {
                      resetbutton(e);
                    }}
                  >
                    Reset
                  </button>
                ) : null}
              </td>
            </tr>
            <tr className="jeanrow">
              <td>
                <img className="producticon" src={jean}></img>
                <span>Jeans</span>
              </td>
              <td>
                <input
                  className="quantitybox"
                  type="number"
                  id="Jeans"
                  name="Jeans"
                  onChange={(e) => {
                    change(e);
                  }}
                />
              </td>
              <td>
                <tr className="iconrow">
                  <td className="icons">
                    <img
                      id="Washing 13"
                      src={color[12] ? bwash : wash}
                      alt="wash"
                      onClick={(e) => {
                        selectaction(e);
                      }}
                    />
                  </td>
                  <td className="icons">
                    <img
                      id="Pressing 14"
                      src={color[13] ? biron : iron}
                      alt="iron"
                      onClick={(e) => {
                        selectaction(e);
                      }}
                    />
                  </td>
                  <td className="icons">
                    <img
                      id="Folding 15"
                      src={color[14] ? bfolding : folding}
                      alt="folding"
                      onClick={(e) => {
                        selectaction(e);
                      }}
                    />
                  </td>
                  <td className="icons">
                    <img
                      id="Chemical-washing 16"
                      src={color[15] ? bbleach : bleach}
                      alt="bleach"
                      onClick={(e) => {
                        selectaction(e);
                      }}
                    />
                  </td>
                </tr>
              </td>
              <td>
                <button
                  className="disprice"
                  type="submit"
                  id="3"
                  onClick={(e) => {
                    calculate(e);
                  }}
                >
                  {expression[3]}
                </button>
              </td>
              <td>
                {reset ? (
                  <button
                    className="resetbtn"
                    type="submit"
                    id="3"
                    onClick={(e) => {
                      resetbutton(e);
                    }}
                  >
                    Reset
                  </button>
                ) : null}
              </td>
            </tr>
            <tr className="boxerrow">
              <td>
                <img className="producticon" src={boxer}></img>
                <span>Boxers</span>
              </td>
              <td>
                <input
                  className="quantitybox"
                  type="number"
                  id="Boxers"
                  name="Boxers"
                  onChange={(e) => {
                    change(e);
                  }}
                />
              </td>
              <td>
                <tr className="iconrow">
                  <td className="icons">
                    <img
                      id="Washing 17"
                      src={color[16] ? bwash : wash}
                      alt="wash"
                      onClick={(e) => {
                        selectaction(e);
                      }}
                    />
                  </td>
                  <td className="icons">
                    <img
                      id="Pressing 18"
                      src={color[17] ? biron : iron}
                      alt="iron"
                      onClick={(e) => {
                        selectaction(e);
                      }}
                    />
                  </td>
                  <td className="icons">
                    <img
                      id="Folding 19"
                      src={color[18] ? bfolding : folding}
                      alt="folding"
                      onClick={(e) => {
                        selectaction(e);
                      }}
                    />
                  </td>
                  <td className="icons">
                    <img
                      id="Chemical-washing 20"
                      src={color[19] ? bbleach : bleach}
                      alt="bleach"
                      onClick={(e) => {
                        selectaction(e);
                      }}
                    />
                  </td>
                </tr>
              </td>
              <td>
                <button
                  className="disprice"
                  type="submit"
                  id="4"
                  onClick={(e) => {
                    calculate(e);
                  }}
                >
                  {expression[4]}
                </button>
              </td>
              <td>
                {reset ? (
                  <button
                    className="resetbtn"
                    type="submit"
                    id="4"
                    onClick={(e) => {
                      resetbutton(e);
                    }}
                  >
                    Reset
                  </button>
                ) : null}
              </td>
            </tr>
            <tr className="joggerrow">
              <td>
                <img className="producticon" src={jogger}></img>
                <span>Joggers</span>
              </td>
              <td>
                <input
                  className="quantitybox"
                  type="number"
                  id="Joggers"
                  name="Joggers"
                  onChange={(e) => {
                    change(e);
                  }}
                />
              </td>
              <td>
                <tr className="iconrow">
                  <td className="icons">
                    <img
                      id="Washing 21"
                      src={color[20] ? bwash : wash}
                      alt="wash"
                      onClick={(e) => {
                        selectaction(e);
                      }}
                    />
                  </td>
                  <td className="icons">
                    <img
                      id="Pressing 22"
                      src={color[21] ? biron : iron}
                      alt="iron"
                      onClick={(e) => {
                        selectaction(e);
                      }}
                    />
                  </td>
                  <td className="icons">
                    <img
                      id="Folding 23"
                      src={color[22] ? bfolding : folding}
                      alt="folding"
                      onClick={(e) => {
                        selectaction(e);
                      }}
                    />
                  </td>
                  <td className="icons">
                    <img
                      id="Chemical-washing 24"
                      src={color[23] ? bbleach : bleach}
                      alt="bleach"
                      onClick={(e) => {
                        selectaction(e);
                      }}
                    />
                  </td>
                </tr>
              </td>
              <td>
                <button
                  className="disprice"
                  type="submit"
                  id="5"
                  onClick={(e) => {
                    calculate(e);
                  }}
                >
                  {expression[5]}
                </button>
              </td>
              <td>
                {reset ? (
                  <button
                    className="resetbtn"
                    type="submit"
                    id="5"
                    onClick={(e) => {
                      resetbutton(e);
                    }}
                  >
                    Reset
                  </button>
                ) : null}
              </td>
            </tr>
            <tr className="otherrow">
              <td>
                <img className="producticon" src={other}></img>
                <span>Others</span>
              </td>
              <td>
                <input
                  className="quantitybox"
                  type="number"
                  id="Others"
                  name="Others"
                  onChange={(e) => {
                    change(e);
                  }}
                />
              </td>
              <td>
                <tr className="iconrow">
                  <td className="icons">
                    <img
                      id="Washing 25"
                      src={color[24] ? bwash : wash}
                      alt="wash"
                      onClick={(e) => {
                        selectaction(e);
                      }}
                    />
                  </td>
                  <td className="icons">
                    <img
                      id="Pressing 26"
                      src={color[25] ? biron : iron}
                      alt="iron"
                      onClick={(e) => {
                        selectaction(e);
                      }}
                    />
                  </td>
                  <td className="icons">
                    <img
                      id="Folding 27"
                      src={color[26] ? bfolding : folding}
                      alt="folding"
                      onClick={(e) => {
                        selectaction(e);
                      }}
                    />
                  </td>
                  <td className="icons">
                    <img
                      id="Chemical-washing 28"
                      src={color[27] ? bbleach : bleach}
                      alt="bleach"
                      onClick={(e) => {
                        selectaction(e);
                      }}
                    />
                  </td>
                </tr>
              </td>
              <td>
                <button
                  className="disprice"
                  type="submit"
                  id="6"
                  onClick={(e) => {
                    calculate(e);
                  }}
                >
                  {expression[6]}
                </button>
              </td>
              <td>
                {reset ? (
                  <button
                    className="resetbtn"
                    type="submit"
                    id="6"
                    onClick={(e) => {
                      resetbutton(e);
                    }}
                  >
                    Reset
                  </button>
                ) : null}
              </td>
            </tr>
          </table>
        </div>
      </div>
      {/* ===============================Summary========================================== */}
      <div Style="float:right; margin-right:125px; margin-top:-12px;">
        <button
          class="button button4"
          Style="transform:scale(0.8); font-size:14px;"
        >
          Cancel
        </button>
        <button
          class="button button5 "
          data-bs-toggle="modal"
          data-bs-target="#exampleModal3"
          Style="transform:scale(0.8); font-size:14px;"
        >
          Proceed
        </button>
        <div
          className="modal fade"
          id="exampleModal3"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog summary-dialog" role="document">
            <div className="modal-content summary-content">
              <div
                className="modal-header"
                Style="background-color:#5861AE; color:white"
              >
                <h5 className="modal-title" id="exampleModalLabel">
                  Summary
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="store" Style="    background-color: #F4F9FF;">
                  <div className="storeloc">
                    <a>Store Location</a>
                    <br />
                    Jp Nagar
                  </div>
                  <div className="storeadd">
                    <a>Store Address</a>
                    <br />
                    Near phone booth, 10th road
                  </div>
                  <div className="storephone">
                    <a>Phone</a>
                    <br />
                    91 9999999999
                  </div>
                </div>

                <div className="details">
                  <small className="orderdetails">Order details</small>
                  {product.map((prod, index) => (
                    <div className="solo-item" key={index}>
                      <div className="solo1">{prod.name}</div>{" "}
                      <div className="solo2">
                        {prod.actions.map((action) => (
                          <i>{action},</i>
                        ))}
                      </div>{" "}
                      <div className="solo3">
                        {prod.quantity} X {parseInt(prod.price / prod.quantity)}{" "}
                        = <b Style="color:#5861AE">{prod.price}</b>{" "}
                      </div>{" "}
                      <hr></hr>{" "}
                    </div>
                  ))}
                  <div className="subtotal">
                    Sub total:{" "}
                    <b className="numbers">
                      {product.reduce(
                        (acc, curr) => acc + parseInt(curr.price),
                        0
                      )}
                    </b>
                  </div>
                  <div className="charges">
                    Pickup charges: <b className="numbers">90</b>
                  </div>
                  <div className="total1" Style="padding-top: 13px;">
                    <b className="final">
                      Total: Rs{" "}
                      {product.reduce(
                        (acc, curr) => acc + parseInt(curr.price),
                        0
                      ) + 90}
                    </b>
                  </div>
                </div>
                <div className="addressbar">
                  <small className="orderdetails">Address</small>
                  <div className="address1">
                    <b className="numbers">Home</b>
                    <br />
                    #223, 10th road, Jp Nagar, Bangalore
                  </div>
                </div>
              </div>
              <div>
                <button
                  type="button"
                  className="confirmbtn"
                  onClick={() => {
                    Create();
                  }}
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default CreateOrder;
