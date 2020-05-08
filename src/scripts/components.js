// FUNCTION CREATING THE HTML STRUCTURE OF MY JOURNAL ENTRY
const COMP = {
  makeEntryComponent (entries) {
    return `
    <h2>${entries.concepts}</h2>
    <h3>${entries.date}</h3>
    <p>${entries.entry}</p>
    <button id="delete--${entries.id}">Delete</button>
    `
  },
  makeFormComponent () {
    return `
    <form action="">
      <fieldset>
          <label for="journalDate">Date of entry</label>
          <input type="date" name="journalDate" id="journalDate">
      </fieldset>
      <fieldset>
          <label for="concepts">Concepts covered</label>
          <input type="text" maxlength="40" name="concepts" id="concepts">
      </fieldset>
      <fieldset>
          <label for="journal_entry">Journal Entry</label>
          <textarea name="journal_entry" id="journal_entry" cols="30" rows="10"></textarea>
      </fieldset>
      <fieldset>
          <label for="mood">Mood for the day</label>
          <select id="mood">
              <option value="appreciative">Appreciative</option>
              <option value="tired">Tired</option>
              <option value="productive">Productive</option>
          </select>
      </fieldset>
      <button id="record-entry">Record Journal Entry</button>
    </form>
    `
},
makeFilterComponent () {
  return `
  <hr>
  <fieldset>
    <legend>Filter Journal Entries by Mood</legend>
    <div id="mood-filter">

    <label for="appreciative">
        <input id="mood-button" type="radio" name="mood" value="Appreciative">Appreciative
    </label>

    <label for="tired">
        <input id="mood-button" type="radio" name="mood" value="Tired">Tired
    </label>

    <label for="productive">
        <input id="mood-button" type="radio" name="mood" value="Productive">Productive
    </label>

    </div>
  </fieldset>
  `
}
}

  export default COMP