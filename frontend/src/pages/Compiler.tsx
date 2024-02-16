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
  useEffect(() => {
    if (urlId) {
      const getSavedCode = async () => {
        try {
          const response = await axios.post(
            "https://code-craft-server-b3r5llngo-mohd-aadils-projects.vercel.app/compiler/savedCode",
            { urlId: urlId }
          );
          dispatch(updateFullCode(response.data.fullCode));
        } catch (error) {
          if (axios.isAxiosError(error)) {
            if (error?.response?.status === 500) {
              toast("Invalid URL, Default Code Loaded");
            }
          }
          ErrorHandler(error);
        }
      };
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
