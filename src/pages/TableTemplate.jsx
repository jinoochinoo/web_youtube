// import React, { useEffect, useState } from 'react'
import Main from '../components/section/Main'
import * as React from "react";

import { CompactTable } from "@table-library/react-table-library/compact";
import { useTheme } from "@table-library/react-table-library/theme";
import { getTheme } from "@table-library/react-table-library/baseline";
import { useSort } from "@table-library/react-table-library/sort";

import { nodes } from "../data/tableData";

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

    const sort = useSort(
      data,
      {
        onChange: onSortChange,
      },
      {
        sortFns: {
          TASK: (array) => array.sort((a, b) => a.name.localeCompare(b.name)),
          DEADLINE: (array) => array.sort((a, b) => a.deadline - b.deadline),
          TYPE: (array) => array.sort((a, b) => a.type.localeCompare(b.type)),
          COMPLETE: (array) => array.sort((a, b) => a.isComplete - b.isComplete),
          TASKS: (array) =>
            array.sort((a, b) => (a.nodes || []).length - (b.nodes || []).length),
        },
      }
    );
  
    function onSortChange(action, state) {
      console.log(action, state);
    }
  
    const COLUMNS = [
      {
        label: "Task",
        renderCell: (item) => item.name,
        sort: { sortKey: "TASK" },
      },
      {
        label: "Deadline",
        renderCell: (item) =>
          item.deadline.toLocaleDateString("en-US", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
          }),
        sort: { sortKey: "DEADLINE" },
      },
      {
        label: "Type",
        renderCell: (item) => item.type,
        sort: { sortKey: "TYPE" },
      },
      {
        label: "Complete",
        renderCell: (item) => item.isComplete.toString(),
        sort: { sortKey: "COMPLETE" },
      },
      {
        label: "Tasks",
        renderCell: (item) => item.nodes?.length,
        sort: { sortKey: "TASKS" },
      },
    ];

    return (
        <Main 
            title = "추천 개발자"
            description="오늘의 추천 개발자 유튜버입니다.">
            
            <section id='developerPage' className={tableTemplatePageClass}>
                <h2>🥰 react-table-library 함 써봐쓰</h2>
                    <div className="developer__inner">
                      <CompactTable columns={COLUMNS} data={data} theme={theme} sort={sort} />
                    </div>
            </section>
        </Main>
    )
}

export default TableTemplate