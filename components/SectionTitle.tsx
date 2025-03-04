import React from "react";
import { Container } from "@/components/Container";

interface SectionTitleProps {
  preTitle?: string;
  title?: string;
  align?: "left" | "center";
  children?: React.ReactNode;
}

export const SectionTitle = (props: Readonly<SectionTitleProps>) => {
  return (
    <Container
      className={`flex w-full flex-col mt-10 lg:mt-20 ${props.align === "left" ? "" : "items-center justify-center text-center"}`}>
      {props.preTitle && (
        <div className="text-xs md:text-sm font-semibold tracking-wider text-indigo-500 uppercase">
          {props.preTitle}
        </div>
      )}

      {props.title && (
        <h2 className="max-w-5xl mt-3 text-lg md:text-2xl font-semibold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
          {props.title}
        </h2>
      )}

      {props.children && (
        <div className="max-w-7xl py-4 text-sm sm:text-base md:text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
          {props.children}
        </div>
      )}
    </Container>
  );
}

