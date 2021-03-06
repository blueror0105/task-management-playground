import Vue from 'vue';
import vco from 'v-click-outside';
import movable from "v-movable";
import VueColumnsResizable from 'vue-columns-resizable';
import VueSignaturePad from 'vue-signature-pad';
import BibAvatar from "~/../bib-shared/components/Atoms/BibAvatar";
import BibButton from "~/../bib-shared/components/Atoms/BibButton";
import BibCheckbox from "~/../bib-shared/components/Atoms/BibCheckbox";
import BibLink from "~/../bib-shared/components/Atoms/BibLink";
import BibProgress from "~/../bib-shared/components/Atoms/BibProgress";
import BibRadio from "~/../bib-shared/components/Atoms/BibRadio";
import BibSwitch from "~/../bib-shared/components/Atoms/BibSwitch";
import BibInput from "~/../bib-shared/components/Atoms/BibInput";
import BibBreadcrumb from "~/../bib-shared/components/Molecules/BibBreadcrumb";
import BibCard from "~/../bib-shared/components/Molecules/BibCard";
import BibChat from "~/../bib-shared/components/Molecules/BibChat";
import BibDatepicker from "~/../bib-shared/components/Molecules/BibDatepicker";
import BibDropdown from "~/../bib-shared/components/Molecules/BibDropdown";
import BibFromGroup from "~/../bib-shared/components/Molecules/BibFormGroup";
import BibModalWrapper from "~/../bib-shared/components/Molecules/BibModalWrapper";
import BibPanelWrapper from "~/../bib-shared/components/Molecules/BibPanelWrapper";
import BibSidebar from "~/../bib-shared/components/Molecules/BibSidebar";
import BibToolbar from "~/../bib-shared/components/Molecules/BibToolbar";
import BibUploader from "~/../bib-shared/components/Molecules/BibUploader";
import BibTable from "~/../bib-shared/components/Organisms/BibTable";
import BibHeader from "~/../bib-shared/components/Organisms/BibHeader";
import BibSidePanel from "~/../bib-shared/components/Organisms/BibSidePanel";
Vue.use(VueColumnsResizable);
Vue.use(vco);
Vue.use(movable);
Vue.use(VueSignaturePad);
Vue.component('bib-avatar', BibAvatar);
Vue.component('bib-button', BibButton);
Vue.component('bib-checkbox', BibCheckbox);
Vue.component('bib-link', BibLink);
Vue.component('bib-progress', BibProgress);
Vue.component('bib-radio', BibRadio);
Vue.component('bib-switch', BibSwitch);
Vue.component('bib-input', BibInput);
Vue.component('bib-breadcrumb', BibBreadcrumb);
Vue.component('bib-card', BibCard);
Vue.component('bib-chat', BibChat);
Vue.component('bib-datepicker', BibDatepicker);
Vue.component('bib-dropdown', BibDropdown);
Vue.component('bib-form-group', BibFromGroup);
Vue.component('bib-panel-wrapper', BibPanelWrapper);
Vue.component('bib-modal-wrapper', BibModalWrapper);
Vue.component('bib-sidebar', BibSidebar);
Vue.component('bib-toolbar', BibToolbar);
Vue.component('bib-uploader', BibUploader);
Vue.component('bib-header', BibHeader);
Vue.component('bib-table', BibTable);
Vue.component('bib-side-panel', BibSidePanel);