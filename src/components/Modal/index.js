import React, { useState } from "react";
import {useDispatch,useSelector} from "react-redux"
import BackIcon from "../svg/backIcon"
import CloseIcon from "../svg/closeIcon"
import ImageContent from "./modalContents/imageContent";
import LoadingContent from "./modalContents/loadingContent";
import AttributeContent from "./modalContents/attributeContent";
export default function index() {
  const [page, setPage] = useState(0);

const modalStatus=useSelector(state=>state.modalReducer.modalStatus)



  const contentArray = [
   <ImageContent setPage={setPage}/>,
   <LoadingContent setPage={setPage}/>,
   <AttributeContent setPage={setPage} page={page}/>
  ];

  return (
    <div className="modalContainer" style={{display:modalStatus?"flex":"none"}}>
      <div className="modalContent">
         {page!==0&&<BackIcon/>} 
         
          <CloseIcon/>
          
          {contentArray[page]}
           
        <div className="number">{page+1}/{contentArray.length}</div>
      </div>
    </div>
  );
}
