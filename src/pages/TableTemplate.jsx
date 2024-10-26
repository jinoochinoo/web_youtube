// import React, { useEffect, useState } from 'react'
import Main from '../components/section/Main'

import { Link } from 'react-router-dom'


import * as React from "react";

import { CompactTable } from "@table-library/react-table-library/compact";
import { useTheme } from "@table-library/react-table-library/theme";
import { getTheme } from "@table-library/react-table-library/baseline";

// import { DocumentationSee } from "../documentation";
import { nodes } from "../data/tableData";

 const COLUMNS = [
   { label: "Task", renderCell: (item) => item.name },
   {
     label: "Deadline",
     renderCell: (item) =>
       item.deadline.toLocaleDateString("en-US", {
         year: "numeric",
         month: "2-digit",
         day: "2-digit",
       }),
   },
   { label: "Type", renderCell: (item) => item.type },
   {
     label: "Complete",
     renderCell: (item) => item.isComplete.toString(),
   },
   { label: "Tasks", renderCell: (item) => item.nodes?.length },
 ];

const styleObj = {
  CompactTable: {
      width: '100%'
  }
}

const TableTemplate = () => {

    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 300);
    }, []);

    const tableTemplatePageClass = loading ? 'isLoading' : 'isLoaded';

    const data = { nodes };
    const theme = useTheme(getTheme());

    return (
        <Main 
            title = "추천 개발자"
            description="오늘의 추천 개발자 유튜버입니다.">
            
            <section id='developerPage' className={tableTemplatePageClass}>
                <h2>🥰 react-table-library 함 써봐쓰</h2>
                    <div className="developer__inner">
                        <CompactTable columns={COLUMNS} data={data} theme={theme} style={styleObj.CompactTable}/>
                    </div>
            </section>
        </Main>
    )
}

export default TableTemplate