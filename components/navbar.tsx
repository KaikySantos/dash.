"use client"

import { ChevronDown, Search, Settings } from "lucide-react";

import { Input } from "./ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";

import { useSettings } from "@/hooks/use-settings";
import { useTranslations } from "next-intl";

export function Navbar() {
  const t = useTranslations("Navbar")
  const settings = useSettings()

  return (
    <nav className="flex items-center justify-between px-6 py-2 bg-background border-b">
      <Input
        placeholder={t("SearchPlaceholder")}
        className="max-w-sm"
        leftIcon={Search}
      />

      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          className="flex items-center gap-2 cursor-pointer py-2 text-left h-auto"
        >
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>KS</AvatarFallback>
          </Avatar>

          <div className="flex flex-col">
            <p className="text-primary text-sm font-medium">Kaiky Santos</p>
            <p className="text-muted-foreground text-xs">carlos.kaiky62@gmail.com</p>
          </div>

          <ChevronDown className="w-4 h-4 text-muted-foreground" />
        </Button>

        <Button
          onClick={settings.onOpen}
          size="icon"
          variant="ghost"
        >
          <Settings className="w-6 h-6" />
        </Button>
      </div>
    </nav>
  )
}