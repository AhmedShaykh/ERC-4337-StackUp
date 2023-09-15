"use client";
import React, { useState } from "react";
import { OurFileRouter } from "../api/uploadthing/core";
import { UploadButton as Button } from "@uploadthing/react";
import "@uploadthing/react/styles.css";
import Link from "next/link";

const UploadButton = () => {

    const [images, setImages] = useState<{
        fileUrl: string;
        fileKey: string;
    }[]>([]);

    const title = images.length ? (
        <div className="flex flex-col items-center space-y-12">
            <p>Upload Complete!</p>
            <p className="mt-2">{images.length} files</p>
        </div>
    ) : null;

    const imgList = (
        <>
            {title}
            <ul>
                {images.map(image => (
                    <li key={image.fileUrl} className="mt-2">
                        <Link href={image.fileUrl} target="_blank">
                            {image.fileUrl}
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    );

    return (
        <div className="bg-zinc-900 text-white h-screen">
            <div className="flex flex-col items-center h-screen justify-center space-y-8">
                <Button<OurFileRouter>
                    endpoint="imageUploader"
                    onClientUploadComplete={(res) => {
                        if (res) {
                            setImages(res);
                            const json = JSON.stringify(res)
                            // Do something with the response
                            console.log(json);
                        }
                        //alert("Upload Completed");
                    }}
                    onUploadError={(error: Error) => {
                        // Do something with the error.
                        alert(`ERROR! ${error.message}`);
                    }}
                />
                {imgList}
            </div>
        </div>
    )
};

export default UploadButton;