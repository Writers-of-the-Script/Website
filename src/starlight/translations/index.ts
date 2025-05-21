import { builtinI18nSchema } from "../schemas/i18n";
import cs from "./cs.json" with { type: "json" };
import en from "./en.json" with { type: "json" };
import es from "./es.json" with { type: "json" };
import ca from "./ca.json" with { type: "json" };
import de from "./de.json" with { type: "json" };
import ja from "./ja.json" with { type: "json" };
import pt from "./pt.json" with { type: "json" };
import fa from "./fa.json" with { type: "json" };
import fr from "./fr.json" with { type: "json" };
import gl from "./gl.json" with { type: "json" };
import he from "./he.json" with { type: "json" };
import id from "./id.json" with { type: "json" };
import it from "./it.json" with { type: "json" };
import nl from "./nl.json" with { type: "json" };
import da from "./da.json" with { type: "json" };
import tr from "./tr.json" with { type: "json" };
import ar from "./ar.json" with { type: "json" };
import nb from "./nb.json" with { type: "json" };
import zh from "./zh-CN.json" with { type: "json" };
import ko from "./ko.json" with { type: "json" };
import sv from "./sv.json" with { type: "json" };
import ro from "./ro.json" with { type: "json" };
import ru from "./ru.json" with { type: "json" };
import vi from "./vi.json" with { type: "json" };
import uk from "./uk.json" with { type: "json" };
import hi from "./hi.json" with { type: "json" };
import zhTW from "./zh-TW.json" with { type: "json" };
import pl from "./pl.json" with { type: "json" };
import sk from "./sk.json" with { type: "json" };
import lv from "./lv.json" with { type: "json" };
import hu from "./hu.json" with { type: "json" };

const { parse } = builtinI18nSchema();

export default Object.fromEntries(
    Object.entries({
        cs,
        en,
        es,
        ca,
        de,
        ja,
        pt,
        fa,
        fr,
        gl,
        he,
        id,
        it,
        nl,
        da,
        tr,
        ar,
        nb,
        zh,
        ko,
        sv,
        ro,
        ru,
        vi,
        uk,
        hi,
        "zh-TW": zhTW,
        pl,
        sk,
        lv,
        hu,
    }).map(([key, dict]) => [key, parse(dict)]),
);
