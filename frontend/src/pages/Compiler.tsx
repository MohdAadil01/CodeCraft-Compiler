import { useEffect } from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { toast } from "sonner";
import CodeEditor from "@/components/CodeEditor";
import NavigationBar from "@/components/NavigationBar";
import CodeRender from "@/components/CodeRender";
import { useParams } from "react-router-dom";
import axios from "axios";
import { ErrorHandler } from "@/utils/ErrorHandler";
import { useDispatch } from "react-redux";
import { updateFullCode } from "@/redux/slices/compilerSlice";

function Compiler() {
  const { urlId } = useParams();
  const dispatch = useDispatch();

  console.log(urlId);

  const getSavedCode = async () => {
    try {
      if (urlId) {
        const response = await axios.get(
          `https://code-craft-server-five.vercel.app/compiler/${urlId}`
        );
        dispatch(updateFullCode(response.data.fullCode));
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error?.response?.status === 500) {
          toast("Invalid URL, Default Code Loaded");
        }
      }
      ErrorHandler(error);
    }
  };

  useEffect(() => {
    if (urlId) {
      getSavedCode();
    }
  }, [urlId]);
  return (
    <ResizablePanelGroup direction="horizontal">
      <ResizablePanel
        className="h-[calc(100dvh - 60px)] sm:min-w-[350px]"
        defaultSize={50}
      >
        <NavigationBar />
        <CodeEditor />
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel
        className="h-[calc(100dvh - 60px)] sm:min-w-[350px]"
        defaultSize={50}
      >
        <CodeRender />
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}

export default Compiler;
