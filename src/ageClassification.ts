/**
 * 任務：實作一個函式 `classifyAge`，根據年齡進行分類。
 *
 * 範例：
 * classifyAge(10) 應該回傳 "Child"
 * classifyAge(15) 應該回傳 "Teenager"
 * classifyAge(30) 應該回傳 "Adult"
 * classifyAge(70) 應該回傳 "Senior"
 *
 * @param age - 一個需要被分類的年齡
 * @returns - 回傳年齡的分類結果
 */
export function classifyAge(age: number): string {
    // 請在此處寫下你的程式碼
    let status = '';
    if(age<13){
        status = "Child"
    }else if(age>12 && age<18){
        status = "Teenager"
    }else if(age >=18 && age < 65){
        status = "Adult"
    }else{
        status = "Senior"
    }
    return status;
}