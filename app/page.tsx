"use client"; // クライアントコンポーネントとしてマーク

import { useState } from "react"; // useStateをインポート
import { Button } from "@/components/ui/button"
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"

const handleClick = () => {
  alert("ボタンがクリックされました！"); // アラートを表示
};

const MyComponent = () => (
  <Alert>
    <AlertTitle>注意</AlertTitle>
    <AlertDescription>これはアラートの説明です。</AlertDescription>
  </Alert>
);

export default function Home() {
  const [showAlert, setShowAlert] = useState(false); // 状態を管理

  return (
    <div>
      <Button onClick={handleClick}>Click me</Button>
      <Button onClick={() => setShowAlert(true)}>押して</Button>
      {showAlert && <MyComponent />} {/* 状態に応じてMyComponentを表示 */}
    </div>
  )
}
