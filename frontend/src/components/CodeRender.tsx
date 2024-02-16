import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

function CodeRender() {
  const fullCode = useSelector(
    (state: RootState) => state.complerSlice.fullCode
  );
  const codeTobeEncoded = `<html><style>${fullCode.css}</style><body>${fullCode.html}</body><script>${fullCode.javascript}</script></html>`;

  const encodedCode = `data:text/html;charset-utf-8, ${encodeURIComponent(
    codeTobeEncoded
  )}`;

  return (
    <div className="bg-white border-2 h-[calc(100dvh-60px)]">
      <iframe src={encodedCode} className="h-full w-full" />
    </div>
  );
}

export default CodeRender;
