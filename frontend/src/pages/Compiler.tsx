import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import CodeEditor from "@/components/CodeEditor";
import NavigationBar from "@/components/NavigationBar";
import CodeRender from "@/components/CodeRender";

function Compiler() {
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
