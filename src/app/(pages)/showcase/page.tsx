"use client";

import { archiveItems, projectItems } from "@/constants";
import Link from "next/link";
import React, { useState } from "react";

type TActionProps = {
  toggleProject: () => void;
  toggleArchive: () => void;
};

const ShowcaseMenu = ({ toggleProject, toggleArchive }: TActionProps) => {
  const [projectClicked, setProjectClicked] = useState(true);
  const [archiveClicked, setArchiveClicked] = useState(false);

  const handleProjectClick = () => {
    toggleProject();
    if (!projectClicked) {
      setArchiveClicked(false);
      setProjectClicked(true);
    } else {
      setProjectClicked(false);
      setArchiveClicked(true);
    }
  };

  const handleArchiveClick = () => {
    toggleArchive();
    if (!archiveClicked) {
      setProjectClicked(false);
      setArchiveClicked(true);
    } else {
      setArchiveClicked(false);
      setProjectClicked(true);
    }
  };
  return (
    <div
      className={
        projectClicked
          ? "mt-16 flex items-center gap-4 lg:w-[427px]"
          : "mt-16 flex items-center gap-4 lg:w-[427px] lg:mt-[15.5rem]"
      }
    >
      <button
        onClick={handleProjectClick}
        className={projectClicked ? " smooth-hover" : "text-slate"}
      >
        + Selected Project
      </button>
      <button
        onClick={handleArchiveClick}
        className={archiveClicked ? " smooth-hover" : "text-slate"}
      >
        <p>/ Archives</p>
      </button>
    </div>
  );
};

const ProjectItems = () => {
  return (
    <div className={`flex mt-8 flex-col gap-4 lg:mt-4 lg:w-[427px] `}>
      {projectItems.map((item, index) => (
        <Link
          href={item.href}
          key={index}
          className={`flex items-center justify-between ${item.tech} ${item.description} tooltip btooltip `}
          target="_blank"
        >
          <p>{`+ ${item.title}`}</p>
          <p className="italic font-light text-slate">{item.type}</p>
        </Link>
      ))}
    </div>
  );
};

const ArchiveItems = () => {
  return (
    <div className={`flex mt-8 flex-col gap-4 lg:mt-4 lg:w-[427px] `}>
      {archiveItems.map((item, index) => (
        <Link
          href={item.href}
          key={index}
          className="flex items-center justify-between"
          target="_blank"
        >
          <p>
            <span className="text-slate font-light">/ </span> {item.title}
          </p>
          <p className="italic font-light text-slate">{item.year}</p>
        </Link>
      ))}
    </div>
  );
};

export default function Showcase() {
  const [menu, setMenu] = useState(true);
  const [archive, setArchive] = useState(false);

  function toggleProjectMenu() {
    if (menu !== archive) {
      setArchive(!archive);
      setMenu(!menu);
    }
  }

  function toggleArchiveMenu() {
    if (archive !== menu) {
      setMenu(!menu);
      setArchive(!archive);
    }
  }

  return (
    <main className="w-full h-[97%] flex flex-col gap-4 lg:items-center lg:justify-center lg:mt-[-6rem]">
      <ShowcaseMenu
        toggleProject={toggleProjectMenu}
        toggleArchive={toggleArchiveMenu}
      />
      {menu && <ProjectItems />}
      {archive && <ArchiveItems />}
    </main>
  );
}
