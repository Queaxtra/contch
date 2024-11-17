<script lang="ts">
    import { onMount } from 'svelte';
    import { usdToTry, euroToTry, btcToTry, ethToTry,usdtToTry, busdToTry } from "$lib/convert";

    interface HistoricalRate {
        value: number;
        timestamp: number;
    }

    interface Currency {
        id: string;
        name: string;
        rate: string;
        icon: string;
        fetch: () => Promise<string>;
        history: HistoricalRate[];
        trend: 'up' | 'down' | 'neutral';
        description: string;
    }

    let currencies: Currency[] = [
        { 
            id: 'usd', 
            name: 'USD/TRY', 
            rate: '0', 
            icon: '💵', 
            fetch: usdToTry, 
            history: [], 
            trend: 'neutral',
            description: 'US Dollar'
        },
        { 
            id: 'eur', 
            name: 'EUR/TRY', 
            rate: '0', 
            icon: '💶', 
            fetch: euroToTry, 
            history: [], 
            trend: 'neutral',
            description: 'Euro'
        },
        { 
            id: 'btc', 
            name: 'BTC/TRY', 
            rate: '0', 
            icon: '₿', 
            fetch: btcToTry, 
            history: [], 
            trend: 'neutral',
            description: 'Bitcoin'
        },
        { 
            id: 'eth', 
            name: 'ETH/TRY', 
            rate: '0', 
            icon: 'Ξ', 
            fetch: ethToTry, 
            history: [], 
            trend: 'neutral',
            description: 'Ethereum'
        },
        { 
            id: 'usdt', 
            name: 'USDT/TRY', 
            rate: '0', 
            icon: '💵', 
            fetch: usdtToTry, 
            history: [], 
            trend: 'neutral',
            description: 'Tether USD'
        },
        { 
            id: 'busd', 
            name: 'BUSD/TRY', 
            rate: '0', 
            icon: '💰', 
            fetch: busdToTry, 
            history: [], 
            trend: 'neutral',
            description: 'Binance USD'
        }
    ];

    let loading = true;
    let refreshing = false;
    const MAX_HISTORY = 10;

    function loadHistory() {
        currencies.forEach(currency => {
            try {
                const stored = localStorage.getItem(`rates_${currency.id}`);
                if (stored) {
                    currency.history = JSON.parse(stored);
                }
            } catch (error) {
                console.error(`Error loading history for ${currency.id}:`, error);
            }
        });
    }

    function updateHistory(currency: Currency, newRate: number) {
        const now = Date.now();
        currency.history.push({ value: newRate, timestamp: now });
        
        if (currency.history.length > MAX_HISTORY) {
            currency.history = currency.history.slice(-MAX_HISTORY);
        }

        if (currency.history.length >= 2) {
            const lastTwo = currency.history.slice(-2);
            currency.trend = lastTwo[1].value > lastTwo[0].value ? 'up' : lastTwo[1].value < lastTwo[0].value ? 'down' : 'neutral';
        }

        try {
            localStorage.setItem(`rates_${currency.id}`, JSON.stringify(currency.history));
        } catch (error) {
            console.error(`Error saving history for ${currency.id}:`, error);
        }
    }

    function getMiniChartPoints(history: HistoricalRate[]): string {
        if (history.length < 2) return '';

        const values = history.map(h => h.value);
        const min = Math.min(...values);
        const max = Math.max(...values);
        const range = max - min || 1;

        const points = history.map((h, i) => {
            const x = (i / (history.length - 1)) * 50;
            const y = 20 - ((h.value - min) / range) * 20;
            return `${x},${y}`;
        });

        return points.join(' ');
    }

    async function updateRates() {
        try {
            refreshing = true;
            for (let currency of currencies) {
                const newRate = await currency.fetch();
                const parsedRate = parseFloat(newRate);
                currency.rate = parsedRate.toLocaleString('tr-TR', {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 8
                });
                updateHistory(currency, parsedRate);
            }
            currencies = currencies;
        } catch (error) {
            console.error('Error updating rates:', error);
        } finally {
            loading = false;
            refreshing = false;
        }
    }

    onMount(() => {
        loadHistory();
        updateRates();
        const interval = setInterval(updateRates, 5000);
        return () => clearInterval(interval);
    });
</script>

<div class="flex items-center justify-center py-8 px-4 md:py-16">
    <div class="w-full max-w-7xl mx-auto">
        <div class="text-center mb-8 md:mb-12">
            <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">Major Currency Rates</h2>
            <p class="text-lg md:text-xl opacity-50">Real-time updates every 5 seconds</p>
        </div>

        <div id="currency-rates" class="max-w-4xl mx-auto relative">
            <div class="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4">
                {#each currencies as currency}
                <div class="relative p-3 md:p-4 bg-cWhiteGray rounded-lg border border-transparent transition-all duration-300 hover:scale-[1.02]">
                    {#if loading}
                    <div class="absolute inset-0 bg-black/5 backdrop-blur-sm rounded-lg flex items-center justify-center">
                        <div class="animate-spin rounded-full h-5 w-5 md:h-6 md:w-6 border border-white/5"></div>
                    </div>
                    {/if}
                    <div class="flex items-center justify-between mb-2">
                        <div class="flex items-center gap-2">
                            <span class="text-xl md:text-2xl">{currency.icon}</span>
                        <div>
                            <span class="font-medium text-sm md:text-base">{currency.name}</span>
                            <span class="block text-xs opacity-50">{currency.description}</span>
                        </div>
                    </div>
                    {#if currency.trend !== 'neutral' && !loading}
                    <span class={currency.trend === 'up' ? 'text-green-500' : 'text-red-500'}>{currency.trend === 'up' ? '↑' : '↓'}</span>
                    {/if}
                </div>
                <p class="text-lg md:text-xl lg:text-2xl font-bold mb-2">
                    {#if loading}
                    <span class="animate-pulse">Loading...</span>
                    {:else}
                    ₺{currency.rate}
                    {/if}
                </p>
                {#if currency.history.length >= 2 && !loading}
                <div class="h-[20px] w-[50px]">
                    <svg width="50" height="20" class="stroke-current {currency.trend === 'up' ? 'text-green-500' : currency.trend === 'down' ? 'text-red-500' : 'text-gray-500'} opacity-50">
                        <polyline fill="none" stroke-width="1.5" points={getMiniChartPoints(currency.history)} />
                    </svg>
                </div>
                {/if}
                </div>
                {/each}
            </div>
        </div>
    </div>
</div>