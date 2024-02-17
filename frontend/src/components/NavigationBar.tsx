import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Loader2, Save, Share2, Code, Copy } from "lucide-react";
import { toast } from "sonner";
import axios from "axios";
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
import { ErrorHandler } from "@/utils/ErrorHandler";
import { useNavigate, useParams } from "react-router-dom";

function NavigationBar() {
  const [loading, setLoading] = useState<boolean>(false);
  const [showShareBtn, setShowShareBtn] = useState<boolean>(false);

  const { urlId } = useParams();

  useEffect(() => {
    if (urlId) {
      setShowShareBtn(true);
    } else {
      setShowShareBtn(false);
    }
  }, [urlId]);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const fullCode = useSelector(
    (state: RootState) => state.complerSlice.fullCode
  );
  const currentLanguage = useSelector(
    (state: RootState) => state.complerSlice.currentLanguage
  );

  const saveCodeHandler = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        "https://code-craft-server-five.vercel.app/compiler/save",
        {
          fullCode: fullCode,
        }
      );
      navigate(`/compiler/${response.data.url}`, { replace: true });
    } catch (error) {
      ErrorHandler(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="bg-black sm:flex sm:justify-between sm:items-center p-2 sm:h-[60px]">
      <div className="__button_container flex sm:gap-2 gap-1">
        <Button
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
        </Button>
        {showShareBtn && (
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
        )}
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
