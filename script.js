async function tranlate() {
  let query = document.getElementById("query").value;
  let source = document.getElementById("input_lang_select").value;
  let target = document.getElementById("output_lang_select").value;
  try {
    let res = await fetch("https://libretranslate.de/translate", {
      method: "POST",
      body: JSON.stringify({
        q: `${query}`,
        source: `${source}`,
        target: `${target}`,
      }),
      headers: { "Content-Type": "application/json" },
    });

    let data = await res.json();
    // console.log(data.translatedText);
    showResult(data.translatedText);
  } catch (error) {
    console.log("error:", error);
  }
}

function showResult(data) {
  let output = document.getElementById("output");
  output.value = data;
}
