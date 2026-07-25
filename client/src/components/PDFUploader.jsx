import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { UploadCloud } from "lucide-react";

function PDFUploader({ onFileSelect }) {
  const onDrop = useCallback((acceptedFiles) => {
    if (acceptedFiles.length > 0) {
      onFileSelect(acceptedFiles[0]);
    }
  }, [onFileSelect]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      "application/pdf": [".pdf"],
    },
    multiple: false,
    onDrop,
  });

  return (
    <div
      {...getRootProps()}
      className={`border-2 border-dashed rounded-2xl p-10 text-center cursor-pointer transition
      ${
        isDragActive
          ? "border-indigo-600 bg-indigo-50"
          : "border-slate-300 bg-white hover:border-indigo-500"
      }`}
    >
      <input {...getInputProps()} />

      <UploadCloud className="mx-auto text-indigo-600" size={60} />

      <h2 className="text-2xl font-bold mt-4">
        Drag & Drop PDF Here
      </h2>

      <p className="text-gray-500 mt-2">
        or click to browse
      </p>
    </div>
  );
}

export default PDFUploader;