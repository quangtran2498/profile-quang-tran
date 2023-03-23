import React, { Component } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const Ckeditor = () => {
  const [data, setData] = React.useState<string>("");
  console.log(data,"data");
  
  const onChang = (e: any, editor: any) => {
    const data = editor.getData();
    setData(data);
  };
  return (
    <div className="" style={{marginBottom:"200px"}}>
      <CKEditor editor={ ClassicEditor } onChange={onChang} data={data}/>
    </div>
  );
};
export default Ckeditor;
