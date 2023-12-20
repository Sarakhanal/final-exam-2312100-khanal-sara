<section class="content" id="converter">
    <h2>Historical Date Converter</h2>
    <div>
        <label for="historicalDate">Enter Historical Date:</label>
        <input type="text" id="historicalDate" placeholder="YYYY-MM-DD">
        <button onclick="convertDate()">Convert</button>
    </div>
    <p id="convertedDate"></p>

    <script>
        function convertDate() {
            const historicalDateInput = document.getElementById('historicalDate').value;

            // Sample historical calendar conversion (replace this with actual logic)
            const gregorianDate = convertToGregorian(historicalDateInput);

            const options = { year: 'numeric', month: 'long', day: 'numeric' };
            const convertedDateString = gregorianDate.toLocaleDateString('en-US', options);

            document.getElementById('convertedDate').textContent = `Converted Date: ${convertedDateString}`;
        }

        // a hypothetical conversion to the Gregorian calendar
        function convertToGregorian(historicalDate) {
            
            const offsetYears = 100;
            const historicalDateParts = historicalDate.split('-');
            const year = parseInt(historicalDateParts[0]) + offsetYears;
            const month = parseInt(historicalDateParts[1]) - 1; // Months are zero-based in JavaScript Date object
            const day = parseInt(historicalDateParts[2]);

            return new Date(year, month, day);
        }
    </script>
</section>
