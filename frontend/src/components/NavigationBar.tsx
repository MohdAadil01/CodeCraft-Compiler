import { Button } from "./ui/button";
import { Save, Share2, Code, Copy } from "lucide-react";
import { toast } from "sonner";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import {
  compilerSliceStateType,
  updateCurrentLanguage,
} from "@/redux/slices/compilerSlice";

function NavigationBar() {
  const dispatch = useDispatch();

  const currentLanguage = useSelector(
    (state: RootState) => state.complerSlice.currentLanguage
  );

  return (
    <div className="bg-black sm:flex sm:justify-between sm:items-center p-2 sm:h-[60px]">
      <div className="__button_container flex sm:gap-2 gap-1">
        <Dialog>
          <DialogTrigger
            className="flex sm:gap-2
          gap-1 justify-center items-center sm:tracking-wider whitespace-nowrap rounded-md text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-green-500 text-secondary-foreground shadow-sm hover:bg-green-600 h-9 px-4 py-[1.29rem]"
          >
            <Save size={16} />
            Save
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="flex gap-2 justify-center items-center">
                Save your code
              </DialogTitle>
              <DialogDescription className="flex flex-col gap-2">
                <p className="text-center">Currently under development</p>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
        {/* <Button
          onClick={saveCodeHandler}
          variant={"success"}
          className="flex sm:gap-2 gap-1 justify-center items-center sm:tracking-wider"
          disabled={loading}
        >
          {loading ? (
            <>
              <Loader2 size={16} className="animate-spin" /> Saving...
            </>
          ) : (
            <>
              <Save size={16} /> Save
            </>
          )}
        </Button> */}
        <Dialog>
          <DialogTrigger
            className="flex sm:gap-2
          gap-1 justify-center items-center sm:tracking-wider whitespace-nowrap rounded-md text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 h-9 px-4 py-[1.29rem]"
          >
            <Share2 size={16} />
            Share
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="flex gap-2 justify-center items-center">
                <Code /> Share your code
              </DialogTitle>
              <DialogDescription className="flex flex-col gap-2">
                <div className="__copy_url flex gap-2">
                  <input
                    type="text"
                    disabled
                    className="w-full px-2 py-2 rounded bg-slate-800 text-slate-400 select-none "
                    value={window.location.href}
                  ></input>
                  <Button
                    variant={"outline"}
                    onClick={() => {
                      window.navigator.clipboard.writeText(
                        window.location.href
                      );
                      toast("URL Copied to clipboard!");
                    }}
                  >
                    <Copy size={14} />
                  </Button>
                </div>
                <p className="text-center">
                  Share this URL with your team to collaborate
                </p>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
      <div className="__select_container flex items-center gap-1 justify-center sm:mt-0 mt-2">
        <Select
          defaultValue={currentLanguage}
          onValueChange={(value) =>
            dispatch(
              updateCurrentLanguage(
                value as compilerSliceStateType["currentLanguage"]
              )
            )
          }
        >
          <SelectTrigger className="w-[180px] bg-gray-800 outline-none focus:ring-0">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="html">HTML</SelectItem>
            <SelectItem value="css">CSS</SelectItem>
            <SelectItem value="javascript">JAVASCRIPT</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}

export default NavigationBar;
